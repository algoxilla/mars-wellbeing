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

const frames = [
  { name: "01-fullscreen-fog", time: 600, label: "1. Full-screen fog" },
  { name: "02-fog-spreading", time: 1900, label: "2. Fog spreading outward" },
  { name: "03-mountains-emerging", time: 2800, label: "3. Mountains emerging through mist" },
  { name: "04-closed-double-door", time: 3800, label: "4. Mountains transitioning into double door" },
  { name: "05-doors-opening", time: 4800, label: "5. Left & right door panels opening" },
  { name: "06-homepage-revealed-behind", time: 5400, label: "6. Homepage appearing behind doors" },
  { name: "07-homepage-completed", time: 6600, label: "7. Final homepage after intro completed" },
];

async function capture() {
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Record Full Continuous Video Transition (8 seconds)
  console.log("1. Recording Continuous Video Transition (8 seconds)...");
  const videoContext = await browser.newContext({
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 720 },
    },
    viewport: { width: 1280, height: 720 },
  });

  const videoPage = await videoContext.newPage();
  await videoPage.goto("http://localhost:3000/?vid=" + Date.now());
  await videoPage.waitForTimeout(8000);
  await videoPage.close();
  await videoContext.close();

  // Save the video as mars-cinematic-doors.webm
  const videoFiles = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
  if (videoFiles.length > 0) {
    const latestVideo = videoFiles[videoFiles.length - 1];
    const sourcePath = path.join(videoDir, latestVideo);
    const destPath = path.join(targetDir, "mars-cinematic-doors.webm");
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Video recorded successfully: ${destPath}`);
  }

  // 2. Capture Desktop Frames (1280x900)
  console.log("2. Capturing Desktop Storyboard Frames (1280x900)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });

  for (const item of frames) {
    console.log(`  -> Capturing Desktop ${item.label} (t=${item.time}ms)...`);
    const page = await desktopContext.newPage();
    await page.goto("http://localhost:3000/?frame=" + Date.now() + Math.random());
    await page.waitForTimeout(item.time);
    await page.screenshot({ path: path.join(targetDir, `${item.name}-desktop.png`) });
    await page.close();
  }
  await desktopContext.close();

  // 3. Capture Mobile Frames (390x844 iPhone Viewport)
  console.log("3. Capturing Mobile Storyboard Frames (390x844)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  });

  for (const item of frames) {
    console.log(`  -> Capturing Mobile ${item.label} (t=${item.time}ms)...`);
    const page = await mobileContext.newPage();
    await page.goto("http://localhost:3000/?frame=" + Date.now() + Math.random());
    await page.waitForTimeout(item.time);
    await page.screenshot({ path: path.join(targetDir, `${item.name}-mobile.png`) });
    await page.close();
  }
  await mobileContext.close();

  await browser.close();
  console.log("All 7 sequential storyboard captures (desktop + mobile) and video completed successfully!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
