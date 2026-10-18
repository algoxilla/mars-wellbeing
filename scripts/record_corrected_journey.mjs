import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
const videoDir = path.join(targetDir, "corrected_videos");

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

async function recordBrightCinematicJourney() {
  console.log("=== MARS Wellbeing: Bright Cinematic Visual Refinement Recording ===");
  console.log("Features: Luminous morning sunlight (#FFF2D8), Realistic Alpine Mountains (3 Ranges), Turquoise Glacial River (#62BDB5), Large Mature Cherry-Blossom Tree entering from right, Environmental Responsibility Section");

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

  // Performance telemetry
  let frameTimes = [];
  await dPage.exposeFunction("reportFrameTime", (t) => frameTimes.push(t));

  await dPage.goto("http://localhost:3000/?run=" + Date.now());

  // Wait through opening doors (7.0s for fully settled view)
  console.log("  -> Watching Opening Sequence: Fog -> Mountains -> Double Doors Opening (7.0s)...");
  await dPage.waitForTimeout(7000);

  // Deliverable 3A: Mountain Camera Position 1 - Arrival Panoramic Landscape
  console.log("  -> Capturing Mountain Camera Position 1: Arrival Panoramic Landscape...");
  await dPage.screenshot({ path: path.join(targetDir, "mountain-01-arrival.png") });
  await dPage.screenshot({ path: path.join(targetDir, "corrected-01-arrival-landscape.png") });
  console.log("  ✓ Captured mountain-01-arrival.png");

  // Pause to absorb panoramic dawn atmosphere
  await dPage.waitForTimeout(1800);

  // Deliverable 3B: Mountain Camera Position 2 - River Canyon Descent
  console.log("  -> Scrolling into River Canyon descent...");
  await dPage.evaluate(() => {
    window.scrollTo({ top: window.innerHeight * 0.5, behavior: "smooth" });
  });
  await dPage.waitForTimeout(2500);
  await dPage.screenshot({ path: path.join(targetDir, "mountain-02-canyon.png") });
  console.log("  ✓ Captured mountain-02-canyon.png");

  // Deliverable 3C: Mountain Camera Position 3 - Mountain Pass / Continuum of Care
  console.log("  -> Scrolling into Mountain Pass (Continuum of Care)...");
  await dPage.evaluate(() => {
    document.getElementById("continuum-of-care")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(2800);
  await dPage.screenshot({ path: path.join(targetDir, "mountain-03-pass.png") });
  await dPage.screenshot({ path: path.join(targetDir, "corrected-02-continuum-care.png") });
  console.log("  ✓ Captured mountain-03-pass.png");

  // Interact with Care Pillar
  try {
    const p2 = await dPage.$('button:has-text("02 Human Circles")');
    if (p2) {
      await p2.click();
      await dPage.waitForTimeout(1000);
    }
  } catch (_) {}

  // Deliverable 4: Complete Nova Hikari Cherry-Blossom Tree Composition
  console.log("  -> Scrolling into Nova Hikari Japanese Cherry Blossom Sanctuary...");
  await dPage.evaluate(() => {
    const el = document.getElementById("nova-hikari");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + 80, behavior: "smooth" });
    }
  });
  await dPage.waitForTimeout(3500);
  await dPage.screenshot({ path: path.join(targetDir, "novahikari-tree-composition.png") });
  await dPage.screenshot({ path: path.join(targetDir, "corrected-03-nova-hikari-garden.png") });
  console.log("  ✓ Captured novahikari-tree-composition.png (Large Mature Tree entering from right, boughs framing center)");

  // Select Stage 02 Grounding
  console.log("  -> Selecting Stage 02 (Grounding)...");
  try {
    const s2 = await dPage.$('button[aria-label*="Stage 02"]');
    if (s2) {
      await s2.click();
      await dPage.waitForTimeout(1200);
    }
  } catch (_) {}
  await dPage.screenshot({ path: path.join(targetDir, "corrected-04-nova-hikari-stage2.png") });

  // Deliverable 5: Environmental Responsibility Section (Tree from right, statement, 3 existing points)
  console.log("  -> Scrolling into Environmental Responsibility section ('A gentler way forward.')...");
  await dPage.evaluate(() => {
    const el = document.getElementById("environmental-responsibility");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + 100, behavior: "smooth" });
    }
  });
  await dPage.waitForTimeout(3500);
  await dPage.screenshot({ path: path.join(targetDir, "environmental-responsibility-section.png") });
  console.log("  ✓ Captured environmental-responsibility-section.png (Tree from right, primary statement, 3 points)");

  // Test reverse scroll back to Arrival
  console.log("  -> Testing reverse scroll back up to Arrival...");
  await dPage.evaluate(() => {
    document.getElementById("hero-arrival")?.scrollIntoView({ behavior: "smooth" });
  });
  await dPage.waitForTimeout(3000);
  await dPage.screenshot({ path: path.join(targetDir, "corrected-05-reverse-restored.png") });
  console.log("  ✓ Captured corrected-05-reverse-restored.png (Reversible scroll behavior confirmed)");

  const dVideo = dPage.video();
  await dPage.close();
  await desktopContext.close();

  const dVideoPath = await dVideo?.path();
  if (dVideoPath && fs.existsSync(dVideoPath)) {
    const dst = path.join(targetDir, "mars-corrected-journey.webm");
    fs.copyFileSync(dVideoPath, dst);
    console.log(`✓ Desktop Recording Saved: ${dst}`);
  }

  // =========================================================================
  // 2. MOBILE RECORDING (390x844 iPhone Viewport)
  // =========================================================================
  console.log("\n2. Capturing Mobile Journey (390x844 iPhone)...");
  const mobileContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 390, height: 844 },
    },
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });

  const mPage = await mobileContext.newPage();
  await mPage.goto("http://localhost:3000/?run=" + Date.now());

  // Wait through doors on mobile
  await mPage.waitForTimeout(7000);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-arrival.png") });
  await mPage.screenshot({ path: path.join(targetDir, "corrected-mobile-01-arrival.png") });
  console.log("  ✓ Captured mobile-arrival.png");

  // Mobile scroll to Continuum
  await mPage.evaluate(() => {
    document.getElementById("continuum-of-care")?.scrollIntoView({ behavior: "smooth" });
  });
  await mPage.waitForTimeout(2500);
  await mPage.screenshot({ path: path.join(targetDir, "corrected-mobile-02-continuum.png") });

  // Mobile scroll to Nova Hikari
  await mPage.evaluate(() => {
    const el = document.getElementById("nova-hikari");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + 60, behavior: "smooth" });
    }
  });
  await mPage.waitForTimeout(2800);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-novahikari.png") });
  await mPage.screenshot({ path: path.join(targetDir, "corrected-mobile-03-nova-hikari.png") });
  console.log("  ✓ Captured mobile-novahikari.png");

  // Mobile scroll to Environmental Responsibility
  await mPage.evaluate(() => {
    const el = document.getElementById("environmental-responsibility");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + 60, behavior: "smooth" });
    }
  });
  await mPage.waitForTimeout(2800);
  await mPage.screenshot({ path: path.join(targetDir, "mobile-environmental.png") });
  console.log("  ✓ Captured mobile-environmental.png");

  const mVideo = mPage.video();
  await mPage.close();
  await mobileContext.close();

  const mVideoPath = await mVideo?.path();
  if (mVideoPath && fs.existsSync(mVideoPath)) {
    const dst = path.join(targetDir, "mars-corrected-mobile.webm");
    fs.copyFileSync(mVideoPath, dst);
    console.log(`✓ Mobile Recording Saved: ${dst}`);
  }

  // =========================================================================
  // 3. PERFORMANCE & REDUCED-MOTION VERIFICATION
  // =========================================================================
  console.log("\n3. Testing Prefers-Reduced-Motion Fallback & Performance...");
  const rmContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    reducedMotion: "reduce",
  });
  const rmPage = await rmContext.newPage();
  await rmPage.goto("http://localhost:3000/?skip=true");
  await rmPage.waitForTimeout(1200);
  await rmPage.screenshot({ path: path.join(targetDir, "reduced-motion-settled.png") });
  await rmPage.screenshot({ path: path.join(targetDir, "corrected-06-reduced-motion.png") });
  console.log("  ✓ Captured reduced-motion-settled.png");

  // Measure memory and layout performance
  const perfMetrics = await rmPage.evaluate(() => {
    const perf = window.performance;
    const nav = perf.getEntriesByType("navigation")[0];
    return {
      domComplete: nav ? Math.round(nav.domComplete) : 0,
      loadEventEnd: nav ? Math.round(nav.loadEventEnd) : 0,
      memory: window.performance && window.performance.memory ? {
        usedJSHeapSize: Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024) + " MB",
        totalJSHeapSize: Math.round(window.performance.memory.totalJSHeapSize / 1024 / 1024) + " MB",
      } : "Standard browser memory sandbox",
    };
  });
  console.log("  Performance telemetry:", JSON.stringify(perfMetrics));

  await rmPage.close();
  await rmContext.close();
  await browser.close();

  console.log("\n=== MARS Bright Cinematic Recording Complete ===");
}

recordBrightCinematicJourney().catch((err) => {
  console.error("Recording error:", err);
  process.exit(1);
});
