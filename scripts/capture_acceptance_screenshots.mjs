import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/screenshots";
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const pagesToCapture = [
  { name: "homepage", route: "/" },
  { name: "nova-hikari", route: "/nova-hikari" },
  { name: "community", route: "/community" },
  { name: "professionals", route: "/professionals" },
  { name: "early-access", route: "/early-access" },
  { name: "contact", route: "/contact" },
  { name: "guided-experience", route: "/guided-experience" },
];

async function capture() {
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. Desktop captures
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  for (const item of pagesToCapture) {
    console.log(`Capturing Desktop: ${item.name} (${item.route})...`);
    await desktopPage.goto(`http://localhost:3000${item.route}`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(600);
    const dest = path.join(targetDir, `${item.name}-desktop.png`);
    await desktopPage.screenshot({ path: dest, fullPage: false });
  }

  // Also capture Early Access in submitted simulation state
  console.log("Capturing Early Access submitted state...");
  await desktopPage.goto("http://localhost:3000/early-access", { waitUntil: "networkidle" });
  await desktopPage.fill("input[type='text']", "Devang Sharma");
  await desktopPage.fill("input[type='email']", "devang@example.com");
  await desktopPage.click("button[type='submit']");
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({
    path: path.join(targetDir, "early-access-submitted-desktop.png"),
    fullPage: false,
  });

  await desktopContext.close();

  // 2. Mobile captures (iPhone 12/13/14 size: 390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  });
  const mobilePage = await mobileContext.newPage();

  for (const item of pagesToCapture) {
    console.log(`Capturing Mobile: ${item.name} (${item.route})...`);
    await mobilePage.goto(`http://localhost:3000${item.route}`, { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(600);
    const dest = path.join(targetDir, `${item.name}-mobile.png`);
    await mobilePage.screenshot({ path: dest, fullPage: false });
  }

  await mobileContext.close();
  await browser.close();

  console.log("All acceptance screenshots captured successfully!");
}

capture().catch((err) => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});
