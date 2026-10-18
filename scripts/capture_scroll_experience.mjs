import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
const videoDir = path.join(targetDir, "video_scroll");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

async function captureExperience() {
  console.log("=== Starting MARS Scroll-Driven Experience Capture ===");
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Record Full Continuous Scroll Journey Video (1280x900)
  console.log("\n1. Recording Continuous Scroll Journey Video (1280x900)...");
  const videoContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 900 },
    },
    viewport: { width: 1280, height: 900 },
  });

  const vPage = await videoContext.newPage();
  await vPage.goto("http://localhost:3000/?run=" + Date.now());

  // Watch Fog -> Mountains -> Double Doors -> Homepage opening (6.2s)
  console.log("  -> Recording Opening sequence...");
  await vPage.waitForTimeout(6200);

  // Toggle ambient audio on to demonstrate animated equalizer waveform in video
  console.log("  -> Interacting with Ambient Audio Toggle...");
  try {
    const audioToggle = await vPage.$('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    if (audioToggle) {
      await audioToggle.click();
      await vPage.waitForTimeout(1000);
    }
  } catch (err) {
    console.log("  -> Audio toggle click note:", err.message);
  }

  // Scroll smoothly through Continuum of Care
  console.log("  -> Scrolling to Continuum of Care...");
  await vPage.evaluate(() => {
    document.querySelector("#continuum-of-care")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(2500);

  // Scroll smoothly to Nova Hikari
  console.log("  -> Scrolling to Nova Hikari Japanese garden...");
  await vPage.evaluate(() => {
    document.querySelector("#nova-hikari")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(3000);

  // Scroll smoothly to Environmental Responsibility Tree
  console.log("  -> Scrolling to Environmental Tree section...");
  await vPage.evaluate(() => {
    document.querySelector("#environmental-responsibility")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(3500);

  // Scroll smoothly to Community Circles
  console.log("  -> Scrolling to Community Circles section...");
  await vPage.evaluate(() => {
    document.querySelector("#community-circles")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(1500);
  // Click a seat node in Community Circles
  try {
    const seatNode = await vPage.$('button[aria-label*="Seat 3"]');
    if (seatNode) {
      await seatNode.click();
      await vPage.waitForTimeout(1200);
    }
  } catch (_) {}
  await vPage.waitForTimeout(1500);

  // Scroll smoothly to Bengaluru Context
  console.log("  -> Scrolling to Bengaluru Context...");
  await vPage.evaluate(() => {
    document.querySelector("#bengaluru-context")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(2200);

  // Scroll smoothly to Clinical Directory
  console.log("  -> Scrolling to Clinical Directory...");
  await vPage.evaluate(() => {
    document.querySelector("#clinical-directory")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(2200);

  // Scroll smoothly to Journal
  console.log("  -> Scrolling to Journal...");
  await vPage.evaluate(() => {
    document.querySelector("#journal-preview")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(2200);

  // Scroll smoothly to Closing Sanctuary
  console.log("  -> Scrolling to Closing Sanctuary...");
  await vPage.evaluate(() => {
    document.querySelector("#closing-sanctuary")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(3000);

  // Test reverse scrolling smoothly back up
  console.log("  -> Reverse scrolling back up to Community Circles...");
  await vPage.evaluate(() => {
    document.querySelector("#community-circles")?.scrollIntoView({ behavior: "smooth" });
  });
  await vPage.waitForTimeout(2500);

  await vPage.close();
  await videoContext.close();

  // Save the video file as mars-scroll-journey.webm
  const videoFiles = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
  if (videoFiles.length > 0) {
    const latestVideo = videoFiles[videoFiles.length - 1];
    const sourcePath = path.join(videoDir, latestVideo);
    const destPath = path.join(targetDir, "mars-scroll-journey.webm");
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Full Scroll Journey Video saved: ${destPath}`);
  }

  // 2. High-Resolution Desktop Screenshots (1280x900)
  console.log("\n2. Capturing Desktop Section Storyboard Screenshots (1280x900)...");
  const dContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const dPage = await dContext.newPage();
  await dPage.goto("http://localhost:3000/?skip=true");
  // Fast-skip intro if button visible or wait for settled
  try {
    const skipBtn = await dPage.$("text=Skip Intro");
    if (skipBtn) await skipBtn.click();
  } catch (_) {}
  await dPage.waitForTimeout(1000);

  // Section 1: Hero Settled
  await dPage.screenshot({ path: path.join(targetDir, "desktop-01-hero-settled.png") });
  console.log("  ✓ Captured desktop-01-hero-settled.png");

  // Section 2: Continuum of Care
  await dPage.evaluate(() => document.querySelector("#continuum-of-care")?.scrollIntoView());
  await dPage.waitForTimeout(800);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-02-continuum-of-care.png") });
  console.log("  ✓ Captured desktop-02-continuum-of-care.png");

  // Section 3: Nova Hikari Japanese Experience
  await dPage.evaluate(() => document.querySelector("#nova-hikari")?.scrollIntoView());
  await dPage.waitForTimeout(1200);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-03-nova-hikari-cherry-blossom.png") });
  console.log("  ✓ Captured desktop-03-nova-hikari-cherry-blossom.png");

  // Section 4: Environmental Responsibility Tree Section
  await dPage.evaluate(() => document.querySelector("#environmental-responsibility")?.scrollIntoView());
  await dPage.waitForTimeout(2000); // Allow tree stroke and blossoms to unfurl
  await dPage.screenshot({ path: path.join(targetDir, "desktop-04-environmental-tree-grown.png") });
  console.log("  ✓ Captured desktop-04-environmental-tree-grown.png");

  // Section 5: Community Circles (Small-Cohort Seating Hearth)
  await dPage.evaluate(() => document.querySelector("#community-circles")?.scrollIntoView());
  await dPage.waitForTimeout(1000);
  try {
    const seatBtn = await dPage.$('button[aria-label*="Seat 2"]');
    if (seatBtn) await seatBtn.click();
    await dPage.waitForTimeout(600);
  } catch (_) {}
  await dPage.screenshot({ path: path.join(targetDir, "desktop-05-community-circles.png") });
  console.log("  ✓ Captured desktop-05-community-circles.png");

  // Section 6: Bengaluru Context
  await dPage.evaluate(() => document.querySelector("#bengaluru-context")?.scrollIntoView());
  await dPage.waitForTimeout(800);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-06-bengaluru-context.png") });
  console.log("  ✓ Captured desktop-06-bengaluru-context.png");

  // Section 7: Clinical Directory
  await dPage.evaluate(() => document.querySelector("#clinical-directory")?.scrollIntoView());
  await dPage.waitForTimeout(800);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-07-clinical-directory.png") });
  console.log("  ✓ Captured desktop-07-clinical-directory.png");

  // Section 8: Journal Preview
  await dPage.evaluate(() => document.querySelector("#journal-preview")?.scrollIntoView());
  await dPage.waitForTimeout(800);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-08-journal-preview.png") });
  console.log("  ✓ Captured desktop-08-journal-preview.png");

  // Section 9: Closing Sanctuary
  await dPage.evaluate(() => document.querySelector("#closing-sanctuary")?.scrollIntoView());
  await dPage.waitForTimeout(800);
  await dPage.screenshot({ path: path.join(targetDir, "desktop-09-closing-sanctuary.png") });
  console.log("  ✓ Captured desktop-09-closing-sanctuary.png");

  // Section 10: Ambient Audio Toggle Active in Header
  await dPage.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await dPage.waitForTimeout(500);
  try {
    const audioBtn = await dPage.$('button[aria-label*="sanctuary audio" i], button[aria-label*="ambient" i]');
    if (audioBtn) {
      await audioBtn.click();
      await dPage.waitForTimeout(800);
    }
  } catch (_) {}
  await dPage.screenshot({ path: path.join(targetDir, "desktop-10-audio-toggle-active.png") });
  console.log("  ✓ Captured desktop-10-audio-toggle-active.png");

  await dPage.close();
  await dContext.close();

  // 3. Mobile Screenshots (390x844 iPhone Viewport)
  console.log("\n3. Capturing Mobile Storyboard Screenshots (390x844)...");
  const mContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  });
  const mPage = await mContext.newPage();
  await mPage.goto("http://localhost:3000/?skip=true");
  try {
    const skipBtn = await mPage.$("text=Skip Intro");
    if (skipBtn) await skipBtn.click();
  } catch (_) {}
  await mPage.waitForTimeout(1000);

  // Mobile 1: Hero
  await mPage.screenshot({ path: path.join(targetDir, "mobile-01-hero-settled.png") });
  console.log("  ✓ Captured mobile-01-hero-settled.png");

  // Mobile 2: Continuum of Care
  await mPage.evaluate(() => document.querySelector("#continuum-of-care")?.scrollIntoView());
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-02-continuum-of-care.png") });
  console.log("  ✓ Captured mobile-02-continuum-of-care.png");

  // Mobile 3: Nova Hikari
  await mPage.evaluate(() => document.querySelector("#nova-hikari")?.scrollIntoView());
  await mPage.waitForTimeout(1200);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-03-nova-hikari-blossom.png") });
  console.log("  ✓ Captured mobile-03-nova-hikari-blossom.png");

  // Mobile 4: Environmental Tree
  await mPage.evaluate(() => document.querySelector("#environmental-responsibility")?.scrollIntoView());
  await mPage.waitForTimeout(2000);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-04-environmental-tree.png") });
  console.log("  ✓ Captured mobile-04-environmental-tree.png");

  // Mobile 5: Community Circles
  await mPage.evaluate(() => document.querySelector("#community-circles")?.scrollIntoView());
  await mPage.waitForTimeout(1200);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-05-community-circles.png") });
  console.log("  ✓ Captured mobile-05-community-circles.png");

  // Mobile 6: Clinical Directory
  await mPage.evaluate(() => document.querySelector("#clinical-directory")?.scrollIntoView());
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-06-clinical-directory.png") });
  console.log("  ✓ Captured mobile-06-clinical-directory.png");

  // Mobile 7: Closing Sanctuary
  await mPage.evaluate(() => document.querySelector("#closing-sanctuary")?.scrollIntoView());
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-07-closing-sanctuary.png") });
  console.log("  ✓ Captured mobile-07-closing-sanctuary.png");

  // Check horizontal overflow on mobile
  const hasOverflow = await mPage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log(`\nMobile horizontal overflow check: ${hasOverflow ? "FAIL (Overflow detected)" : "PASS (Clean fit, 0px overflow)"}`);

  await mPage.close();
  await mContext.close();

  await browser.close();
  console.log("\n=== MARS Scroll-Driven Capture Completed Successfully! ===");
}

captureExperience().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
