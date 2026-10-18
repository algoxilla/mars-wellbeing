import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
const videoDir = path.join(targetDir, "prototype_video");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

async function recordPrototypeJourney() {
  console.log("=== Recording MARS Prototype Journey ===");
  console.log("Journey: Double Doors -> Atmospheric Landscape -> Headline -> Continuum of Care -> Nova Hikari Sanctuary");

  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Record Full HD Prototype Video (1280x800)
  const context = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 800 },
    },
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();
  console.log("  -> Navigating to MARS homepage (http://localhost:3000)...");
  await page.goto("http://localhost:3000/?run=" + Date.now());

  // Capture Scene A: Atmospheric Fog (at 0.8s)
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(targetDir, "proto-01-fog.png") });
  console.log("  ✓ Captured proto-01-fog.png");

  // Capture Scene B: Sacred Mountains (at 2.2s)
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(targetDir, "proto-02-mountains.png") });
  console.log("  ✓ Captured proto-02-mountains.png");

  // Capture Scene C: Closed Double Doors (at 3.8s)
  await page.waitForTimeout(1600);
  await page.screenshot({ path: path.join(targetDir, "proto-03-doors-closed.png") });
  console.log("  ✓ Captured proto-03-doors-closed.png");

  // Capture Scene D: Double Doors Sliding Open (at 5.2s)
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(targetDir, "proto-04-doors-opening.png") });
  console.log("  ✓ Captured proto-04-doors-opening.png");

  // Scene E: Doors Open, Landscape revealed, Headline settles (at 6.6s)
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(targetDir, "proto-05-hero-settled.png") });
  console.log("  ✓ Captured proto-05-hero-settled.png");

  // Pause to let visitor absorb the atmospheric landscape and floating typography
  await page.waitForTimeout(2000);

  // Scroll smoothly down the 3D spline into Continuum of Care
  console.log("  -> Scrolling forward along 3D spline into Continuum of Care...");
  await page.evaluate(async () => {
    const target = document.getElementById("continuum-of-care");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(targetDir, "proto-06-continuum-care.png") });
  console.log("  ✓ Captured proto-06-continuum-care.png");

  // Interact with second care node (Human Circles)
  console.log("  -> Interacting with Continuum care space 02...");
  try {
    const spaceNode = await page.$('text="Human Circles"');
    if (spaceNode) {
      await spaceNode.click();
      await page.waitForTimeout(1200);
    }
  } catch (_) {}

  // Scroll smoothly down river curve into Nova Hikari Sanctuary
  console.log("  -> Scrolling into Nova Hikari Japanese Sanctuary...");
  await page.evaluate(async () => {
    const target = document.getElementById("nova-hikari");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: path.join(targetDir, "proto-07-nova-hikari.png") });
  console.log("  ✓ Captured proto-07-nova-hikari.png");

  // Select Stage 02 (Grounding) in Nova Hikari
  console.log("  -> Selecting Stage 02 in Nova Hikari...");
  try {
    const stage2Btn = await page.$('button[aria-label*="Stage 02"]');
    if (stage2Btn) {
      await stage2Btn.click();
      await page.waitForTimeout(1500);
    }
  } catch (_) {}
  await page.screenshot({ path: path.join(targetDir, "proto-08-nova-hikari-stage2.png") });
  console.log("  ✓ Captured proto-08-nova-hikari-stage2.png");

  // Reverse Scroll test: smoothly glide back up to Hero
  console.log("  -> Testing reverse scroll back up to Continuum and Hero...");
  await page.evaluate(async () => {
    const target = document.getElementById("hero-arrival");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(targetDir, "proto-09-reverse-settled.png") });
  console.log("  ✓ Captured proto-09-reverse-settled.png");

  await page.close();
  await context.close();
  await browser.close();

  // Find saved webm video and copy to target filename
  const files = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
  if (files.length > 0) {
    const latest = files[files.length - 1];
    const src = path.join(videoDir, latest);
    const dst = path.join(targetDir, "mars-prototype-journey.webm");
    fs.copyFileSync(src, dst);
    console.log(`\n✓ Full Prototype Journey Video saved: ${dst}`);
  }
  console.log("=== Prototype Journey Recording Complete ===");
}

recordPrototypeJourney().catch((err) => {
  console.error("Recording error:", err);
  process.exit(1);
});
