import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function verifyUpdates() {
  console.log("=== Verifying Partner Branding, Nova Hikari Copy & Four-Member Team Section ===");

  const browser = await chromium.launch({ channel: "msedge" });

  // 1. DESKTOP VERIFICATION (1280x800)
  console.log("\n1. Desktop Verification...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await desktopContext.newPage();
  
  // Set session storage to ensure intro is settled and bypass active overlay
  await page.addInitScript(() => {
    sessionStorage.setItem("mars_has_seen_opening", "true");
  });

  await page.goto("http://localhost:3000/?skip=true");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);

  // 1A. Desktop Header Screenshot (direct locator)
  console.log("  -> Capturing Desktop Header with Highland Care & MARS logos...");
  const desktopHeader = page.locator("header");
  await desktopHeader.screenshot({
    path: path.join(targetDir, "partner-header-desktop.png"),
  });
  console.log("  ✓ Captured partner-header-desktop.png");

  // 1B. Nova Hikari Section with Indo-Japanese descriptor
  console.log("  -> Capturing Nova Hikari section with Indo-Japanese descriptor...");
  const novaSection = page.locator("#nova-hikari");
  await novaSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await novaSection.screenshot({ path: path.join(targetDir, "novahikari-indo-japanese.png") });
  console.log("  ✓ Captured novahikari-indo-japanese.png");

  // 1C. About MARS - The People Behind MARS
  console.log("  -> Capturing The People Behind MARS team section...");
  const teamSection = page.locator("#team");
  await teamSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await teamSection.screenshot({ path: path.join(targetDir, "team-four-members-desktop.png") });
  console.log("  ✓ Captured team-four-members-desktop.png");

  await page.close();
  await desktopContext.close();

  // 2. MOBILE VERIFICATION (390x844 - iPhone 13/14)
  console.log("\n2. Mobile Verification...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
  });
  const mPage = await mobileContext.newPage();

  await mPage.addInitScript(() => {
    sessionStorage.setItem("mars_has_seen_opening", "true");
  });

  await mPage.goto("http://localhost:3000/?skip=true");
  await mPage.waitForLoadState("networkidle");
  await mPage.waitForTimeout(1500);

  // 2A. Mobile Header Screenshot
  console.log("  -> Capturing Mobile Header with both logos...");
  const mobileHeader = mPage.locator("header");
  await mobileHeader.screenshot({
    path: path.join(targetDir, "partner-header-mobile.png"),
  });
  console.log("  ✓ Captured partner-header-mobile.png");

  // 2B. Check horizontal scroll overflow
  const hasHorizontalScroll = await mPage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log("  Mobile horizontal overflow detected:", hasHorizontalScroll ? "YES (ERROR)" : "NO (PERFECT)");

  // 2C. Mobile Team Section
  console.log("  -> Capturing Mobile Team Section...");
  const mTeamSection = mPage.locator("#team");
  await mTeamSection.scrollIntoViewIfNeeded();
  await mPage.waitForTimeout(1200);
  await mTeamSection.screenshot({ path: path.join(targetDir, "team-four-members-mobile.png") });
  console.log("  ✓ Captured team-four-members-mobile.png");

  await mPage.close();
  await mobileContext.close();

  // 3. /ABOUT PAGE VERIFICATION
  console.log("\n3. Dedicated /about Page Verification...");
  const aboutPageContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const aPage = await aboutPageContext.newPage();
  await aPage.goto("http://localhost:3000/about");
  await aPage.waitForLoadState("networkidle");
  await aPage.waitForTimeout(1000);

  const aTeamSection = aPage.locator("#team");
  await aTeamSection.scrollIntoViewIfNeeded();
  await aPage.waitForTimeout(1000);
  await aTeamSection.screenshot({ path: path.join(targetDir, "about-page-team.png") });
  console.log("  ✓ Captured about-page-team.png");

  await aPage.close();
  await aboutPageContext.close();

  await browser.close();
  console.log("\n=== Verification Complete ===");
}

verifyUpdates().catch((err) => {
  console.error("Verification error:", err);
  process.exit(1);
});
