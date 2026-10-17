import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";
const videoDir = path.join(targetDir, "video");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

async function capture() {
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Record Full Video of Desktop Cinematic Sequence (8 seconds)
  console.log("1. Recording Desktop Video Transition (8 seconds)...");
  const videoContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 720 },
    },
    viewport: { width: 1280, height: 720 },
  });

  const videoPage = await videoContext.newPage();
  await videoPage.goto("http://localhost:3000/?video=" + Date.now());
  // Wait through the full 6.4s sequence + 1.6s settled rest
  await videoPage.waitForTimeout(8000);
  await videoPage.close();
  await videoContext.close();

  // Find the recorded video and rename it clearly
  const videoFiles = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
  if (videoFiles.length > 0) {
    const latestVideo = videoFiles[videoFiles.length - 1];
    const sourcePath = path.join(videoDir, latestVideo);
    const destPath = path.join(targetDir, "mars-cinematic-opening.webm");
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Video recorded successfully: ${destPath}`);
  }

  // 2. Capture Exact Desktop Sequential Storyboard Frames (1280x900)
  console.log("2. Capturing Desktop Sequential Storyboard Frames...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });

  const timestamps = [
    { name: "scene-a-atmosphere-desktop.png", time: 700, label: "Scene A (Atmosphere alone)" },
    { name: "scene-b-slogan-reveal-desktop.png", time: 2600, label: "Scene B (Slogan reveal)" },
    { name: "scene-b2-subline-moment-desktop.png", time: 4400, label: "Scene B.2 (Subline moment)" },
    { name: "scene-c-nature-transition-desktop.png", time: 5700, label: "Scene C (Nature breathing)" },
    { name: "scene-d-settled-desktop.png", time: 7200, label: "Scene D (Landing settled)" },
  ];

  for (const item of timestamps) {
    console.log(`  -> Capturing ${item.label} at t=${item.time}ms...`);
    const page = await desktopContext.newPage();
    await page.goto("http://localhost:3000/?t=" + Date.now() + Math.random());
    await page.waitForTimeout(item.time);
    await page.screenshot({ path: path.join(targetDir, item.name) });
    await page.close();
  }
  await desktopContext.close();

  // 3. Capture Exact Mobile Sequential Storyboard Frames (390x844 iPhone Viewport)
  console.log("3. Capturing Mobile Sequential Storyboard Frames...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  });

  const mobileTimestamps = [
    { name: "scene-a-atmosphere-mobile.png", time: 700, label: "Mobile Scene A (Atmosphere alone)" },
    { name: "scene-b-slogan-reveal-mobile.png", time: 2600, label: "Mobile Scene B (Slogan reveal)" },
    { name: "scene-b2-subline-moment-mobile.png", time: 4400, label: "Mobile Scene B.2 (Subline moment)" },
    { name: "scene-c-nature-transition-mobile.png", time: 5700, label: "Mobile Scene C (Nature breathing)" },
    { name: "scene-d-settled-mobile.png", time: 7200, label: "Mobile Scene D (Landing settled)" },
  ];

  for (const item of mobileTimestamps) {
    console.log(`  -> Capturing ${item.label} at t=${item.time}ms...`);
    const page = await mobileContext.newPage();
    await page.goto("http://localhost:3000/?t=" + Date.now() + Math.random());
    await page.waitForTimeout(item.time);
    await page.screenshot({ path: path.join(targetDir, item.name) });
    await page.close();
  }
  await mobileContext.close();

  await browser.close();
  console.log("All cinematic storyboard captures and video completed successfully!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
