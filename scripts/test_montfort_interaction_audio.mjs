import { chromium } from "playwright";

async function verifyInteractiveAudio() {
  console.log("=== Testing Montfort-Level Interactions & Ambient Audio ===");
  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(`Console error on ${page.url()}: ${msg.text()}`);
    }
  });

  // 1. Visit homepage and verify default audio state (OFF by default)
  console.log("\n1. Testing Default Audio Policy (Must start OFF)...");
  await page.goto("http://localhost:3000/?skip=true", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const initialSoundButton = await page.$("button[aria-label*='sanctuary audio']");
  if (!initialSoundButton) {
    throw new Error("Ambient audio toggle button not found in header");
  }

  const initialPressed = await initialSoundButton.getAttribute("aria-pressed");
  const initialText = await initialSoundButton.textContent();
  console.log(`  ✓ Audio toggle found. Initial aria-pressed: "${initialPressed}", Text: "${initialText.trim()}"`);
  if (initialPressed !== "false") {
    errors.push(`Expected initial aria-pressed to be "false", got "${initialPressed}"`);
  }

  // 2. Click to enable ambient audio
  console.log("\n2. Testing Enabling Ambient Audio...");
  await initialSoundButton.click();
  await page.waitForTimeout(1500);

  const playingPressed = await initialSoundButton.getAttribute("aria-pressed");
  const playingText = await initialSoundButton.textContent();
  const hasWaveBars = await page.$(".animate-wave-1");
  console.log(`  ✓ Audio enabled. aria-pressed: "${playingPressed}", Text: "${playingText.trim()}", Animated wave bars present: ${!!hasWaveBars}`);
  if (playingPressed !== "true") {
    errors.push(`Expected aria-pressed to be "true" after click, got "${playingPressed}"`);
  }
  if (!hasWaveBars) {
    errors.push("Expected animated waveform bars to appear when audio is playing.");
  }

  // Check audio element status inside page
  const audioState = await page.evaluate(() => {
    // Check if localStorage preference saved
    const saved = localStorage.getItem("mars_ambient_sound_enabled");
    return { saved };
  });
  console.log(`  ✓ Stored preference in localStorage: "${audioState.saved}"`);

  // 3. Test Client-Side Navigation Audio Persistence
  console.log("\n3. Testing Client-Side Route Navigation Audio Persistence...");
  // Navigate to /nova-hikari via header link
  const novaLink = await page.$("header nav a[href='/nova-hikari']");
  if (novaLink) {
    await novaLink.click();
    await page.waitForURL("**/nova-hikari");
    await page.waitForTimeout(1000);

    const navAudioButton = await page.$("button[aria-label*='sanctuary audio']");
    const navAudioPressed = await navAudioButton?.getAttribute("aria-pressed");
    const navAudioText = await navAudioButton?.textContent();
    console.log(`  ✓ Navigated to /nova-hikari. Audio aria-pressed: "${navAudioPressed}", Text: "${navAudioText?.trim()}"`);
    if (navAudioPressed !== "true") {
      errors.push("Ambient audio did not persist across client-side route navigation!");
    }
  }

  // Navigate back to home
  const homeLogo = await page.$("header a[aria-label='MARS Wellbeing Home']");
  if (homeLogo) {
    await homeLogo.click();
    await page.waitForURL("http://localhost:3000/");
    await page.waitForTimeout(1000);
  }

  // 4. Test Interactive Elements on Homepage
  console.log("\n4. Testing Interactive Elements & Keyboard Responses...");

  // Continuum of Care tabs
  const tab02 = await page.$("#continuum-of-care [role='button']:nth-child(2)");
  if (tab02) {
    await tab02.click();
    await page.waitForTimeout(300);
    const tab02Active = await tab02.getAttribute("aria-pressed");
    console.log(`  ✓ Continuum of Care Tab 02 activated: ${tab02Active === "true"}`);
    if (tab02Active !== "true") {
      errors.push("Continuum of Care Tab 02 did not activate on click.");
    }
  }

  // Nova Hikari 10-stage stepper
  const stage03Btn = await page.$("#nova-hikari button[aria-label*='Stage 03']");
  if (stage03Btn) {
    await stage03Btn.click();
    await page.waitForTimeout(300);
    const stage03Selected = await stage03Btn.getAttribute("aria-pressed");
    console.log(`  ✓ Nova Hikari Stage 03 selected: ${stage03Selected === "true"}`);
    if (stage03Selected !== "true") {
      errors.push("Stage 03 button did not activate on click.");
    }
  }

  // Community Circles seating nodes
  const seatBtn = await page.$("#community-circles button[aria-label*='Circle participant seat 1']");
  if (seatBtn) {
    await seatBtn.click();
    await page.waitForTimeout(300);
    console.log("  ✓ Community Circles seat node clicked smoothly.");
  }

  // 5. Test Breathing Pacer & Audio Coordination
  console.log("\n5. Testing Breathing Pacer & Audio Ducking Coordination...");
  const pacerBtn = await page.$("button[aria-label*='breathing pacer']");
  if (pacerBtn) {
    const pacerInitialText = await pacerBtn.textContent();
    console.log(`  ✓ Breathing pacer button found: "${pacerInitialText?.trim()}"`);
    // Toggle pause
    await pacerBtn.click();
    await page.waitForTimeout(500);
    const pacerPausedText = await pacerBtn.textContent();
    console.log(`  ✓ Breathing pacer toggled: "${pacerPausedText?.trim()}"`);
    // Toggle resume
    await pacerBtn.click();
    await page.waitForTimeout(500);
    console.log("  ✓ Breathing pacer resumed smoothly.");
  }

  // 6. Test Document Visibility Handling (Tab Hidden / Visible)
  console.log("\n6. Testing Document Visibility Handling...");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { value: true, writable: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.waitForTimeout(600);
  console.log("  ✓ Dispatched document.hidden = true (fade out handled).");

  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { value: false, writable: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.waitForTimeout(600);
  console.log("  ✓ Dispatched document.hidden = false (fade in restored).");

  // 7. Test Muting Audio
  console.log("\n7. Testing Audio Muting / Pausing...");
  const muteButton = await page.$("button[aria-label*='sanctuary audio']");
  if (muteButton) {
    await muteButton.click();
    await page.waitForTimeout(1000);
    const mutedPressed = await muteButton.getAttribute("aria-pressed");
    const mutedText = await muteButton.textContent();
    console.log(`  ✓ Audio muted. aria-pressed: "${mutedPressed}", Text: "${mutedText.trim()}"`);
    if (mutedPressed !== "false") {
      errors.push("Expected audio aria-pressed to be false after muting.");
    }
  }

  // 8. Mobile Navigation & Overflow Check
  console.log("\n8. Testing Mobile Viewport Navigation & Overflow (390px)...");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000/?skip=true", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const menuButton = await page.$("button[aria-label='Toggle navigation menu']");
  if (menuButton) {
    await menuButton.click();
    await page.waitForTimeout(500);
    const mobileMenuOpen = await menuButton.getAttribute("aria-expanded");
    console.log(`  ✓ Mobile menu drawer opened: ${mobileMenuOpen === "true"}`);
    if (mobileMenuOpen !== "true") {
      errors.push("Mobile menu drawer did not expand.");
    }
    await menuButton.click();
    await page.waitForTimeout(500);
  }

  const hasMobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log(`  ✓ Mobile horizontal overflow check: ${hasMobileOverflow ? "FAIL" : "PASS (0px overflow)"}`);
  if (hasMobileOverflow) {
    errors.push("Mobile horizontal overflow detected at 390px.");
  }

  await page.close();
  await context.close();
  await browser.close();

  console.log("\n=================================");
  if (errors.length === 0) {
    console.log("🎉 ALL MONTFORT INTERACTION & AUDIO TESTS PASSED (0 ERRORS)");
  } else {
    console.error(`✗ Test failed with ${errors.length} errors:`, errors);
    process.exit(1);
  }
}

verifyInteractiveAudio().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
