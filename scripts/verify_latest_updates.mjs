import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function verify() {
  console.log("=== Verifying Realistic 3D Mountains on Scroll, Team Photos & Free Copy Removal ===");

  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  // Set session storage to bypass intro
  await page.addInitScript(() => {
    sessionStorage.setItem("mars_has_seen_opening", "true");
  });

  console.log("1. Loading Homepage...");
  await page.goto("http://localhost:3000/?skip=true");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  // 1. Hero with 3D Realistic Mountain Canvas
  console.log("2. Capturing Hero with Realistic 3D Mountain Background...");
  await page.screenshot({
    path: path.join(targetDir, "hero-realistic-mountains.png"),
  });
  console.log("  ✓ Captured hero-realistic-mountains.png");

  // 2. Scroll to "What Is MARS" - capturing 3D mountain background during scroll
  console.log("3. Scrolling to What Is MARS...");
  await page.evaluate(() => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(targetDir, "scroll-what-is-mars-mountains.png"),
  });
  console.log("  ✓ Captured scroll-what-is-mars-mountains.png");

  // 3. Scroll to Nova Hikari - inspect stages and no 'free' badges
  console.log("4. Scrolling to Nova Hikari...");
  const novaSection = page.locator("#nova-hikari");
  await novaSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(targetDir, "scroll-nova-hikari-mountains.png"),
  });
  console.log("  ✓ Captured scroll-nova-hikari-mountains.png");

  // 4. Scroll to Team section on Homepage
  console.log("5. Scrolling to The People Behind MARS (Team)...");
  const teamSection = page.locator("#team");
  await teamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await teamSection.screenshot({
    path: path.join(targetDir, "team-photos-homepage.png"),
  });
  console.log("  ✓ Captured team-photos-homepage.png");

  // 5. Check About page team section
  console.log("6. Navigating to /about page...");
  await page.goto("http://localhost:3000/about");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);

  const aboutTeamSection = page.locator("#team");
  await aboutTeamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await aboutTeamSection.screenshot({
    path: path.join(targetDir, "team-photos-about-page.png"),
  });
  console.log("  ✓ Captured team-photos-about-page.png");

  // 6. Check for unexpected 'free' copy on homepage
  console.log("7. Checking page text for 'free forever' or 'permanently free'...");
  await page.goto("http://localhost:3000/?skip=true");
  await page.waitForLoadState("networkidle");
  const pageText = await page.locator("body").innerText();
  const hasFreeForever = /free forever/i.test(pageText);
  const hasPermanentlyFree = /permanently free/i.test(pageText);
  console.log("  'Free Forever' detected:", hasFreeForever ? "YES (FAIL)" : "NO (PASS)");
  console.log("  'Permanently Free' detected:", hasPermanentlyFree ? "YES (FAIL)" : "NO (PASS)");

  await browser.close();
  console.log("=== Verification Completed Successfully ===");
}

verify().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
