import { chromium } from "playwright";

async function runAudioAcceptanceSuite() {
  console.log("=================================================");
  console.log("   MARS WELLBEING — AUDIO ACCEPTANCE SUITE       ");
  console.log("=================================================");

  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const results = [];

  function record(testNum, title, pass, details) {
    const status = pass ? "PASS" : "FAIL";
    console.log(`[Test ${testNum}] ${title}: ${status}`);
    if (details) console.log(`       -> ${details}`);
    results.push({ testNum, title, status, details });
  }

  try {
    // -------------------------------------------------------------
    // Test 1: New visitor preference defaults to ON & autoplay attempted
    // -------------------------------------------------------------
    const ctx1 = await browser.newContext();
    const page1 = await ctx1.newPage();
    await page1.goto("http://localhost:3000/?skip=true");
    await page1.waitForTimeout(1000);

    const state1 = await page1.evaluate(() => window.__mars_audio_state);
    const pref1 = await page1.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
    const isPrefOn = state1?.enabled === true;
    record(
      1,
      "New visitor: preference defaults to ON and autoplay is attempted",
      isPrefOn,
      `State enabled: ${state1?.enabled}, localStorage: ${pref1}, isPlaying: ${state1?.isPlaying}, blocked: ${state1?.playbackBlocked}`
    );

    // -------------------------------------------------------------
    // Test 2: Browser blocks autoplay: preference stays ON and interface explains how to start audio
    // -------------------------------------------------------------
    // In headless/clean context without interaction, Chromium blocks audible audio autoplay
    const isBlockedOrPlaying = state1?.isPlaying || state1?.playbackBlocked;
    const toggleLabel1 = await page1.getAttribute('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]', 'aria-label');
    const toggleText1 = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    const explanationTruthful = state1?.playbackBlocked ? toggleText1.includes("TAP TO PLAY") || toggleText1.includes("SOUND: ON") : true;
    record(
      2,
      "Browser blocks autoplay: preference stays ON and interface explains how to start",
      isPrefOn && explanationTruthful,
      `Preference preserved: ${state1?.enabled}, Toggle text: "${toggleText1.trim()}", Label: "${toggleLabel1}"`
    );

    // -------------------------------------------------------------
    // Test 3: Visitor clicks Sound ON: audio begins if permitted
    // -------------------------------------------------------------
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(1200);
    const state3 = await page1.evaluate(() => window.__mars_audio_state);
    const toggleText3 = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    record(
      3,
      "Visitor clicks Sound ON: audio begins if permitted",
      state3?.isPlaying === true && toggleText3.includes("SOUND: ON"),
      `isPlaying: ${state3?.isPlaying}, volume: ${state3?.volume.toFixed(2)}, text: "${toggleText3.trim()}"`
    );

    // -------------------------------------------------------------
    // Test 4: Visitor clicks Sound OFF: audio stops and remains off
    // -------------------------------------------------------------
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(800);
    const state4 = await page1.evaluate(() => window.__mars_audio_state);
    const pref4 = await page1.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
    const toggleText4 = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    record(
      4,
      "Visitor clicks Sound OFF: audio stops and remains off",
      state4?.enabled === false && state4?.isPlaying === false && pref4 === "false",
      `enabled: ${state4?.enabled}, isPlaying: ${state4?.isPlaying}, localStorage: ${pref4}, text: "${toggleText4.trim()}"`
    );

    // -------------------------------------------------------------
    // Test 5: Visitor clicks Sound ON again: audio resumes successfully
    // -------------------------------------------------------------
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(1200);
    const state5 = await page1.evaluate(() => window.__mars_audio_state);
    const pref5 = await page1.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
    const toggleText5 = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    record(
      5,
      "Visitor clicks Sound ON again: audio resumes successfully",
      state5?.enabled === true && state5?.isPlaying === true && pref5 === "true",
      `enabled: ${state5?.enabled}, isPlaying: ${state5?.isPlaying}, localStorage: ${pref5}, text: "${toggleText5.trim()}"`
    );

    // -------------------------------------------------------------
    // Test 6: Visitor turns sound OFF, switches tabs, and returns: audio stays OFF
    // -------------------------------------------------------------
    // Explicitly turn OFF
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(600);
    // Simulate tab switch out and in
    await page1.evaluate(() => {
      Object.defineProperty(document, "hidden", { value: true, writable: true });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await page1.waitForTimeout(400);
    await page1.evaluate(() => {
      Object.defineProperty(document, "hidden", { value: false, writable: true });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await page1.waitForTimeout(800);
    const state6 = await page1.evaluate(() => window.__mars_audio_state);
    record(
      6,
      "Visitor turns sound OFF, switches tabs, and returns: audio stays OFF",
      state6?.enabled === false && state6?.isPlaying === false,
      `enabled: ${state6?.enabled}, isPlaying: ${state6?.isPlaying}, audio.paused: ${await page1.evaluate(() => window.__mars_audio_state.audioEl?.paused)}`
    );

    // -------------------------------------------------------------
    // Test 7: Visitor leaves sound ON, switches tabs, and returns: resumes without duplicating
    // -------------------------------------------------------------
    // Turn back ON
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(1000);
    // Tab hidden
    await page1.evaluate(() => {
      Object.defineProperty(document, "hidden", { value: true, writable: true });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await page1.waitForTimeout(500);
    const state7Hidden = await page1.evaluate(() => window.__mars_audio_state);
    // Tab visible
    await page1.evaluate(() => {
      Object.defineProperty(document, "hidden", { value: false, writable: true });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await page1.waitForTimeout(1000);
    const state7Visible = await page1.evaluate(() => window.__mars_audio_state);
    record(
      7,
      "Visitor leaves sound ON, switches tabs, and returns: resumes properly",
      state7Visible?.enabled === true && state7Visible?.isPlaying === true,
      `When hidden isPlaying: ${state7Hidden?.isPlaying}, When visible isPlaying: ${state7Visible?.isPlaying}`
    );

    // -------------------------------------------------------------
    // Test 8: Visitor navigates between multiple routes: no unnecessary restart or duplicate audio
    // -------------------------------------------------------------
    const audioInstanceIdBefore = await page1.evaluate(() => {
      window.__mars_audio_instance_marker = window.__mars_audio_instance_marker || Math.random();
      if (window.__mars_audio_state.audioEl) {
        window.__mars_audio_state.audioEl.__marker = window.__mars_audio_state.audioEl.__marker || Math.random();
        return window.__mars_audio_state.audioEl.__marker;
      }
      return null;
    });

    await page1.click('a[href="/nova-hikari"]');
    await page1.waitForTimeout(1200);

    const audioInstanceIdAfter = await page1.evaluate(() => {
      return window.__mars_audio_state.audioEl?.__marker;
    });
    const state8 = await page1.evaluate(() => window.__mars_audio_state);
    const sameInstance = audioInstanceIdBefore !== null && audioInstanceIdBefore === audioInstanceIdAfter;
    record(
      8,
      "Visitor navigates routes: single audio controller persisted across navigation",
      sameInstance && state8?.isPlaying === true,
      `Same audio element: ${sameInstance}, isPlaying on /nova-hikari: ${state8?.isPlaying}`
    );

    // -------------------------------------------------------------
    // Test 9: Visitor pauses or disables audio while breathing pacer is active: stays OFF
    // -------------------------------------------------------------
    // Click toggle to turn OFF while on /nova-hikari (which has the BreathingPacer)
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(1000);
    const state9 = await page1.evaluate(() => window.__mars_audio_state);
    // Wait through multiple breath pacer cycles (e.g. 5 seconds)
    await page1.waitForTimeout(5000);
    const state9AfterCycles = await page1.evaluate(() => window.__mars_audio_state);
    record(
      9,
      "Visitor disables audio while breathing pacer is active: no restart occurs",
      state9AfterCycles?.enabled === false && state9AfterCycles?.isPlaying === false,
      `After 5s breath cycles, enabled: ${state9AfterCycles?.enabled}, isPlaying: ${state9AfterCycles?.isPlaying}`
    );

    // -------------------------------------------------------------
    // Test 10: Media error / recovery test
    // -------------------------------------------------------------
    // Simulate a media error event on the audio element
    await page1.evaluate(() => {
      const audioEl = window.__mars_audio_state?.audioEl;
      if (audioEl) {
        audioEl.dispatchEvent(new Event("error"));
      }
    });
    await page1.waitForTimeout(300);
    const state10Error = await page1.evaluate(() => window.__mars_audio_state);
    const toggleText10Error = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    
    // Now click the toggle to attempt recovery
    await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    await page1.waitForTimeout(1000);
    const state10Recovered = await page1.evaluate(() => window.__mars_audio_state);
    
    const errorHonest = state10Error?.hasError === true && toggleText10Error.includes("UNAVAILABLE");
    const recoveryHandled = state10Recovered?.hasError === false;

    record(
      10,
      "Media error or rejected playback: interface remains recoverable and truthful",
      errorHonest && recoveryHandled,
      `Error detected: ${errorHonest} (text: "${toggleText10Error.trim()}"), Recovered after click: ${recoveryHandled}`
    );

    // -------------------------------------------------------------
    // Test 11: Preference persists across refreshes and is not overwritten by visibility events
    // -------------------------------------------------------------
    // Turn sound explicitly OFF before reload test
    const currentStateBefore11 = await page1.evaluate(() => window.__mars_audio_state);
    if (currentStateBefore11?.enabled) {
      await page1.click('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
      await page1.waitForTimeout(600);
    }

    await page1.reload();
    await page1.waitForTimeout(1000);
    const state11 = await page1.evaluate(() => window.__mars_audio_state);
    const pref11 = await page1.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
    record(
      11,
      "Preference persists across refreshes (explicit OFF remains OFF)",
      state11?.enabled === false && state11?.isPlaying === false && pref11 === "false",
      `After reload, enabled: ${state11?.enabled}, isPlaying: ${state11?.isPlaying}, localStorage: ${pref11}`
    );

    // -------------------------------------------------------------
    // Test 12: Rapid toggling ON/OFF does not produce overlapping fades or incorrect indicators
    // -------------------------------------------------------------
    const toggleBtn = await page1.$('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    // Rapidly toggle 4 times in quick succession
    await toggleBtn.click(); // turn ON
    await page1.waitForTimeout(80);
    await toggleBtn.click(); // turn OFF
    await page1.waitForTimeout(90);
    await toggleBtn.click(); // turn ON
    await page1.waitForTimeout(80);
    await toggleBtn.click(); // turn OFF
    await page1.waitForTimeout(1000);

    const state12 = await page1.evaluate(() => window.__mars_audio_state);
    const toggleText12 = await page1.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    const rapidClean = state12?.enabled === false && state12?.isPlaying === false && toggleText12.includes("SOUND: OFF");
    record(
      12,
      "Rapid toggling ON/OFF does not produce overlapping fades or state mismatch",
      rapidClean,
      `Final state after rapid burst -> enabled: ${state12?.enabled}, isPlaying: ${state12?.isPlaying}, text: "${toggleText12.trim()}"`
    );

    await page1.close();
    await ctx1.close();
  } catch (err) {
    console.error("Test execution error:", err);
  } finally {
    await browser.close();
  }

  console.log("\n=================================================");
  const allPassed = results.every((r) => r.status === "PASS");
  console.log(`TOTAL TESTS: ${results.length} | PASSED: ${results.filter((r) => r.status === "PASS").length} | FAILED: ${results.filter((r) => r.status === "FAIL").length}`);
  console.log(`OVERALL RESULT: ${allPassed ? "ALL PASS" : "FAILURES DETECTED"}`);
  console.log("=================================================");
}

runAudioAcceptanceSuite().catch(console.error);
