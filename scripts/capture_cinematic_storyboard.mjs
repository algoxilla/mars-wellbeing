import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function captureStoryboard() {
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Desktop Storyboard (1280x900)
  console.log("Capturing Desktop Storyboard (Scenes A through D)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });

  // Scene A: Atmosphere (300ms)
  let page = await desktopContext.newPage();
  await page.goto("http://localhost:3000/?test=" + Date.now());
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(targetDir, "scene-a-atmosphere-desktop.png") });
  await page.close();

  // Scene B: Slogan Reveal (1700ms)
  page = await desktopContext.newPage();
  await page.goto("http://localhost:3000/?test=" + Date.now());
  await page.waitForTimeout(1700);
  await page.screenshot({ path: path.join(targetDir, "scene-b-slogan-reveal-desktop.png") });
  await page.close();

  // Scene C: Nature Transition (3200ms)
  page = await desktopContext.newPage();
  await page.goto("http://localhost:3000/?test=" + Date.now());
  await page.waitForTimeout(3200);
  await page.screenshot({ path: path.join(targetDir, "scene-c-nature-transition-desktop.png") });
  await page.close();

  // Scene D: Landing Page Settled (4600ms)
  page = await desktopContext.newPage();
  await page.goto("http://localhost:3000/?test=" + Date.now());
  await page.waitForTimeout(4600);
  await page.screenshot({ path: path.join(targetDir, "scene-d-settled-desktop.png") });
  await page.close();

  await desktopContext.close();

  // 2. Mobile Storyboard (390x844 iPhone Viewport)
  console.log("Capturing Mobile Storyboard (Scenes B and D)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  });

  // Mobile Scene B: Slogan Reveal (1700ms)
  let mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000/?test=" + Date.now());
  await mobilePage.waitForTimeout(1700);
  await mobilePage.screenshot({ path: path.join(targetDir, "scene-b-slogan-reveal-mobile.png") });
  await mobilePage.close();

  // Mobile Scene D: Landing Page Settled (4600ms)
  mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000/?test=" + Date.now());
  await mobilePage.waitForTimeout(4600);
  await mobilePage.screenshot({ path: path.join(targetDir, "scene-d-settled-mobile.png") });
  await mobilePage.close();

  await mobileContext.close();
  await browser.close();

  console.log("Cinematic storyboard captures completed successfully!");
}

captureStoryboard().catch((err) => {
  console.error("Storyboard capture failed:", err);
  process.exit(1);
});
