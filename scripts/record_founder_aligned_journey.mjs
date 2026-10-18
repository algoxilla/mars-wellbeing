import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
const videoDir = path.join(targetDir, "founder_videos");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

// Clean old webm in videoDir so we capture the fresh recordings
const oldWebms = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
oldWebms.forEach((f) => {
  try {
    fs.unlinkSync(path.join(videoDir, f));
  } catch (_) {}
});

async function recordFounderJourney() {
  console.log("=== MARS Wellbeing: Founder-Aligned Design System Recording ===");
  console.log("Tokens: Warm Ivory (#F5F0E7), Light Sage (#E3E9DE), Forest Green (#153D35), Antique Gold (#C9A15A), Dark Body (#1B2926)");
  console.log("Sections: 1. Hero -> 2. What Is MARS? -> 3. Nova Hikari -> 4. How It Works -> 5. Community -> 6. Professionals -> 7. Journal -> 8. About & Environmental -> 9. FAQ -> 10. Early Access -> 11. Footer");

  const browser = await chromium.launch({ channel: "msedge" });

  // =========================================================================
  // 1. DESKTOP RECORDING (1280x800)
  // =========================================================================
  console.log("\n1. Capturing Desktop Journey (1280x800)...");
  const desktopContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 800 },
    },
    viewport: { width: 1280, height: 800 },
  });

  const dPage = await desktopContext.newPage();

  await dPage.goto("http://localhost:3000/?run=" + Date.now());

  // Wait through opening doors (6.5s)
  console.log("  -> Watching Opening Sequence: Fog -> Mountains -> Double Doors (6.5s)...");
  await dPage.waitForTimeout(6500);

  // Section 1: Hero Settled
  console.log("  -> Capturing Section 1: Hero Arrival Settled...");
  await dPage.screenshot({ path: path.join(targetDir, "founder-01-hero-arrival.png") });
  console.log("  ✓ Captured founder-01-hero-arrival.png");

  // Section 2: What Is MARS?
  console.log("  -> Scrolling to Section 2: What Is MARS?...");
  await dPage.evaluate(() => {
    document.getElementById("what-is-mars")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-02-what-is-mars.png") });
  console.log("  ✓ Captured founder-02-what-is-mars.png");

  // Section 3: Nova Hikari Signature Card
  console.log("  -> Scrolling to Section 3: Nova Hikari...");
  await dPage.evaluate(() => {
    document.getElementById("nova-hikari")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2500);
  await dPage.screenshot({ path: path.join(targetDir, "founder-03-nova-hikari.png") });
  console.log("  ✓ Captured founder-03-nova-hikari.png");

  // Section 4: How It Works 4 Steps
  console.log("  -> Scrolling to Section 4: How It Works...");
  await dPage.evaluate(() => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-04-how-it-works.png") });
  console.log("  ✓ Captured founder-04-how-it-works.png");

  // Section 5: Community Circles & Hearth
  console.log("  -> Scrolling to Section 5: Community Circles...");
  await dPage.evaluate(() => {
    document.getElementById("community")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-05-community.png") });
  console.log("  ✓ Captured founder-05-community.png");

  // Section 6: Qualified Directory
  console.log("  -> Scrolling to Section 6: Professionals...");
  await dPage.evaluate(() => {
    document.getElementById("professionals")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-06-professionals.png") });
  console.log("  ✓ Captured founder-06-professionals.png");

  // Section 7: Journal Preview
  console.log("  -> Scrolling to Section 7: Journal Preview...");
  await dPage.evaluate(() => {
    document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-07-journal.png") });
  console.log("  ✓ Captured founder-07-journal.png");

  // Section 8: About MARS & Environmental Responsibility
  console.log("  -> Scrolling to Section 8: About MARS & Environmental Responsibility...");
  await dPage.evaluate(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-08-about-environmental.png") });
  console.log("  ✓ Captured founder-08-about-environmental.png");

  // Section 9: FAQ
  console.log("  -> Scrolling to Section 9: FAQ...");
  await dPage.evaluate(() => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2200);
  await dPage.screenshot({ path: path.join(targetDir, "founder-09-faq.png") });
  console.log("  ✓ Captured founder-09-faq.png");

  // Section 10: Early Access Form & Interaction Test
  console.log("  -> Scrolling to Section 10: Early Access Form...");
  await dPage.evaluate(() => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2000);

  // Type sample name and email to test the interactive founder form
  await dPage.fill("#early-access-name", "Ananya Rao");
  await dPage.fill("#early-access-email", "ananya.rao@example.com");
  await dPage.waitForTimeout(800);

  // Click Copy enquiry details button
  const copyBtn = await dPage.$('button:has-text("Copy enquiry details")');
  if (copyBtn) {
    await copyBtn.click();
    await dPage.waitForTimeout(1000);
  }
  await dPage.screenshot({ path: path.join(targetDir, "founder-10-early-access.png") });
  console.log("  ✓ Captured founder-10-early-access.png (with interactive clipboard confirmation)");

  // Section 11: Footer
  console.log("  -> Scrolling to Section 11: Footer...");
  await dPage.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
  await dPage.waitForTimeout(2000);
  await dPage.screenshot({ path: path.join(targetDir, "founder-11-footer.png") });
  console.log("  ✓ Captured founder-11-footer.png");

  const dVideo = dPage.video();
  await dPage.close();
  await desktopContext.close();

  const dVideoPath = await dVideo?.path();
  if (dVideoPath && fs.existsSync(dVideoPath)) {
    const dst = path.join(targetDir, "mars-founder-journey.webm");
    fs.copyFileSync(dVideoPath, dst);
    console.log(`✓ Desktop Recording Saved: ${dst}`);
  }

  // =========================================================================
  // 2. MOBILE RECORDING (390x844 - iPhone 13/14)
  // =========================================================================
  console.log("\n2. Capturing Mobile Journey (390x844)...");
  const mobileContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 390, height: 844 },
    },
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
  });

  const mPage = await mobileContext.newPage();
  await mPage.goto("http://localhost:3000/?skip=true&run=" + Date.now());
  await mPage.waitForTimeout(2500);

  // Mobile Hero
  await mPage.screenshot({ path: path.join(targetDir, "founder-mobile-01-hero.png") });
  console.log("  ✓ Captured founder-mobile-01-hero.png");

  // Mobile Nova Hikari
  await mPage.evaluate(() => {
    document.getElementById("nova-hikari")?.scrollIntoView({ behavior: "smooth" });
  });
  await mPage.waitForTimeout(2500);
  await mPage.screenshot({ path: path.join(targetDir, "founder-mobile-03-nova-hikari.png") });
  console.log("  ✓ Captured founder-mobile-03-nova-hikari.png");

  // Mobile How It Works
  await mPage.evaluate(() => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  });
  await mPage.waitForTimeout(2500);
  await mPage.screenshot({ path: path.join(targetDir, "founder-mobile-04-how-it-works.png") });
  console.log("  ✓ Captured founder-mobile-04-how-it-works.png");

  // Mobile Early Access
  await mPage.evaluate(() => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  });
  await mPage.waitForTimeout(2500);
  await mPage.screenshot({ path: path.join(targetDir, "founder-mobile-10-early-access.png") });
  console.log("  ✓ Captured founder-mobile-10-early-access.png");

  // Mobile Footer
  await mPage.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
  await mPage.waitForTimeout(2000);
  await mPage.screenshot({ path: path.join(targetDir, "founder-mobile-11-footer.png") });
  console.log("  ✓ Captured founder-mobile-11-footer.png");

  const mVideo = mPage.video();
  await mPage.close();
  await mobileContext.close();

  const mVideoPath = await mVideo?.path();
  if (mVideoPath && fs.existsSync(mVideoPath)) {
    const dst = path.join(targetDir, "mars-founder-mobile.webm");
    fs.copyFileSync(mVideoPath, dst);
    console.log(`✓ Mobile Recording Saved: ${dst}`);
  }

  // =========================================================================
  // 3. PREFERS-REDUCED-MOTION VERIFICATION
  // =========================================================================
  console.log("\n3. Testing Prefers-Reduced-Motion Fallback...");
  const rmContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    reducedMotion: "reduce",
  });
  const rmPage = await rmContext.newPage();
  await rmPage.goto("http://localhost:3000/?test=" + Date.now());
  await rmPage.waitForTimeout(1000);
  await rmPage.screenshot({ path: path.join(targetDir, "founder-reduced-motion-settled.png") });
  console.log("  ✓ Captured founder-reduced-motion-settled.png");

  await rmPage.close();
  await rmContext.close();
  await browser.close();

  console.log("\n=== MARS Founder-Aligned Recording Complete ===");
}

recordFounderJourney().catch((err) => {
  console.error("Recording error:", err);
  process.exit(1);
});
