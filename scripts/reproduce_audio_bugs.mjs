import { chromium } from "playwright";

async function runReproduction() {
  console.log("=== MARS AUDIO BUG REPRODUCTION SUITE ===");
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("\nScenario 1: Fresh visit audio state and preference check");
  await page.goto("http://localhost:3000/?skip=true");
  await page.waitForTimeout(1000);
  const initialPref = await page.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
  const isAudioPlaying = await page.evaluate(() => {
    const audios = Array.from(document.querySelectorAll("audio"));
    return audios.some((a) => !a.paused);
  });
  const toggleText = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> localStorage pref: ${initialPref}`);
  console.log(`  -> Real audio playing in DOM: ${isAudioPlaying}`);
  console.log(`  -> Toggle button text: "${toggleText.trim()}"`);

  console.log("\nScenario 2: Toggle OFF -> ON -> OFF cycle without reload");
  const audioBtn = await page.$('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  // Click ON
  console.log("  -> Clicking toggle to switch ON...");
  await audioBtn.click();
  await page.waitForTimeout(1500);
  let textAfterOn = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  let playingAfterOn = await page.evaluate(() => {
    // Note: since Audio was created via new Audio() inside useEffect, check via context or audio element
    return window.__mars_audio ? !window.__mars_audio.paused : "new Audio() not attached to window";
  });
  console.log(`  -> Toggle text after ON: "${textAfterOn.trim()}"`);

  // Click OFF
  console.log("  -> Clicking toggle to switch OFF...");
  await audioBtn.click();
  await page.waitForTimeout(1500);
  let textAfterOff = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> Toggle text after OFF: "${textAfterOff.trim()}"`);

  // Click ON again (test bug 2)
  console.log("  -> Clicking toggle to switch ON again...");
  await audioBtn.click();
  await page.waitForTimeout(1500);
  let textAfterOn2 = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> Toggle text after second ON: "${textAfterOn2.trim()}"`);

  console.log("\nScenario 3: Tab switching / visibilitychange behavior when explicitly turned OFF");
  // Turn OFF explicitly
  await audioBtn.click();
  await page.waitForTimeout(1000);
  const offPref = await page.evaluate(() => localStorage.getItem("mars_ambient_sound_enabled"));
  console.log(`  -> Explicitly turned OFF. localStorage pref: ${offPref}`);
  
  // Simulate document.hidden = true then false
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { value: true, writable: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { value: false, writable: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.waitForTimeout(1000);
  const textAfterTabReturn = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> Toggle text after tab return: "${textAfterTabReturn.trim()}"`);

  console.log("\nScenario 4: Client-side route change behavior");
  await page.click('a[href="/nova-hikari"]');
  await page.waitForTimeout(1500);
  const routeToggleText = await page.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> Toggle text on /nova-hikari: "${routeToggleText.trim()}"`);

  console.log("\nScenario 5: Autoplay block handling & state mismatch");
  // Create a new context with autoplay blocked (default in clean contexts without user gesture)
  const freshContext = await browser.newContext();
  const freshPage = await freshContext.newPage();
  await freshPage.goto("http://localhost:3000/?skip=true");
  await freshPage.waitForTimeout(1000);
  const freshToggle = await freshPage.innerText('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
  console.log(`  -> Fresh context toggle text: "${freshToggle.trim()}"`);

  await browser.close();
  console.log("\n=== Reproduction Run Complete ===");
}

runReproduction().catch(console.error);
