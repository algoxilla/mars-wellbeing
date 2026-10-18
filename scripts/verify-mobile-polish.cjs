const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.join(
  process.env.USERPROFILE || "C:\\Users\\devns",
  ".gemini\\antigravity\\brain\\bd0ac09d-51c6-4fd5-8a61-9313dbb3143f\\mobile-header-polish"
);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: "360px-narrow-android", width: 360, height: 740 },
  { name: "375px-compact-se", width: 375, height: 667 },
  { name: "390px-iphone", width: 390, height: 844 },
];

async function runVerification() {
  console.log("=========================================================");
  console.log("MARS Wellbeing — Final Mobile Header Polish Verification");
  console.log("=========================================================\n");

  const browser = await chromium.launch({ channel: "msedge", headless: true });
  let passedCount = 0;
  let failedCount = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ PASS: ${message}`);
      passedCount++;
    } else {
      console.error(`  ✗ FAIL: ${message}`);
      failedCount++;
    }
  }

  // 1. Verify Logo Sizing and Layout Across Mobile Viewports
  console.log("[1] Checking MARS Logo Dimensions & Header Overflow...");
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    // Check header overflow
    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert(docWidth <= vp.width, `Viewport ${vp.name} document width (${docWidth}px) <= window (${vp.width}px)`);

    // Check logo dimensions
    const logoImg = await page.locator("header nav a[aria-label='MARS Wellbeing Home'] img");
    await logoImg.waitFor({ state: "visible" });
    const logoBox = await logoImg.boundingBox();

    assert(logoBox !== null, `Logo rendered on ${vp.name}`);
    if (logoBox) {
      console.log(`    -> Logo rendered at: ${Math.round(logoBox.width)}px width x ${Math.round(logoBox.height)}px height`);
      // Previously was 16px height, now ~19px (+18.75%)
      assert(logoBox.height >= 18 && logoBox.height <= 21, `Logo height on ${vp.name} is ${Math.round(logoBox.height)}px (expected 18-21px, enlarged ~18.75%)`);
      assert(logoBox.width >= 44 && logoBox.width <= 55, `Logo width on ${vp.name} is ${Math.round(logoBox.width)}px with correct 2.5:1 ratio`);
    }

    // Capture closed mobile header screenshot
    const closedShotPath = path.join(OUTPUT_DIR, `closed-${vp.name}.png`);
    await page.screenshot({ path: closedShotPath, fullPage: false });
    console.log(`    -> Saved screenshot: ${closedShotPath}`);

    await page.close();
  }

  // 2. Verify Mobile Menu Open Appearance & Positioning at 360px, 375px, 390px
  console.log("\n[2] Checking Mobile Three-Dot Menu Opening & Content Visibility...");
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    // Find and click the three-dot trigger
    const menuBtn = page.locator("[data-testid='mobile-menu-trigger']");
    await menuBtn.waitFor({ state: "visible" });
    await menuBtn.click();
    await page.waitForTimeout(300); // Wait for transition

    // Check menu panel dialog
    const panel = page.locator("div[role='dialog'][aria-label='Navigation Menu']");
    await panel.waitFor({ state: "visible" });
    const panelBox = await panel.boundingBox();

    assert(panelBox !== null, `Menu panel is visible on ${vp.name}`);
    if (panelBox) {
      console.log(`    -> Panel dimensions: ${Math.round(panelBox.width)}px width x ${Math.round(panelBox.height)}px height at y=${Math.round(panelBox.y)}px`);
      // Panel should be entirely within the viewport
      assert(panelBox.x >= 0, `Panel left margin (${Math.round(panelBox.x)}px) >= 0`);
      assert(panelBox.x + panelBox.width <= vp.width, `Panel right edge (${Math.round(panelBox.x + panelBox.width)}px) <= viewport width (${vp.width}px)`);
      assert(panelBox.y >= 44, `Panel positioned cleanly below header (y=${Math.round(panelBox.y)}px >= 44px)`);
      assert(panelBox.y + panelBox.height < vp.height, `Panel bottom (${Math.round(panelBox.y + panelBox.height)}px) within viewport height (${vp.height}px)`);

      // Verify panel height occupies approximately the upper quarter (~20% to ~35%)
      const heightRatio = panelBox.height / vp.height;
      console.log(`    -> Panel occupies ${(heightRatio * 100).toFixed(1)}% of viewport height`);
      assert(heightRatio >= 0.22 && heightRatio <= 0.36, `Panel occupies ~quarter of mobile screen (${(heightRatio * 100).toFixed(1)}%)`);
    }

    // Verify presence and visibility of Community, About, Contact
    const communityLink = panel.locator("a[href='/community']");
    const aboutLink = panel.locator("a[href='/about']");
    const contactLink = panel.locator("a[href='/contact']");

    assert(await communityLink.isVisible(), `Community link is visible on ${vp.name}`);
    assert(await aboutLink.isVisible(), `About link is visible on ${vp.name}`);
    assert(await contactLink.isVisible(), `Contact link is visible on ${vp.name}`);

    // Verify ambient audio toggle inside panel
    const panelAudioToggle = panel.locator("button[aria-label*='ambient']");
    assert(await panelAudioToggle.isVisible(), `Ambient audio toggle is visible inside panel on ${vp.name}`);

    // Capture open mobile menu screenshot
    const openShotPath = path.join(OUTPUT_DIR, `open-${vp.name}.png`);
    await page.screenshot({ path: openShotPath, fullPage: false });
    console.log(`    -> Saved screenshot: ${openShotPath}`);

    await page.close();
  }

  // 3. Test Outside-Click Dismissal
  console.log("\n[3] Testing Outside-Click Dismissal...");
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const menuBtn = page.locator("[data-testid='mobile-menu-trigger']");
    await menuBtn.click();
    await page.waitForTimeout(200);

    const panel = page.locator("div[role='dialog'][aria-label='Navigation Menu']");
    assert(await panel.isVisible(), "Menu opened successfully");

    // Tap outside the panel (e.g. at coordinates x=200, y=600)
    await page.mouse.click(200, 600);
    await page.waitForTimeout(250);

    const isClosedAfterOutsideClick = !(await panel.isVisible());
    assert(isClosedAfterOutsideClick, "Menu closed after clicking outside backdrop");

    await page.close();
  }

  // 4. Test Escape Key Dismissal
  console.log("\n[4] Testing Escape Key Dismissal...");
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const menuBtn = page.locator("[data-testid='mobile-menu-trigger']");
    await menuBtn.click();
    await page.waitForTimeout(200);

    const panel = page.locator("div[role='dialog'][aria-label='Navigation Menu']");
    assert(await panel.isVisible(), "Menu opened before Escape test");

    // Press Escape
    await page.keyboard.press("Escape");
    await page.waitForTimeout(250);

    const isClosedAfterEscape = !(await panel.isVisible());
    assert(isClosedAfterEscape, "Menu closed after pressing Escape");

    await page.close();
  }

  // 5. Test Link Selection & Navigation with Audio Continuity
  console.log("\n[5] Testing Menu Navigation & Audio Continuity...");
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    // Open menu
    const menuBtn = page.locator("[data-testid='mobile-menu-trigger']");
    await menuBtn.click();
    await page.waitForTimeout(200);

    // Toggle audio on inside the panel
    const panel = page.locator("div[role='dialog'][aria-label='Navigation Menu']");
    const audioBtn = panel.locator("button[aria-label*='ambient']");
    await audioBtn.click();
    await page.waitForTimeout(300);

    const audioStateBefore = await audioBtn.getAttribute("aria-pressed");
    console.log(`    -> Audio state after toggle: ${audioStateBefore}`);

    // Click Community link
    const communityLink = panel.locator("a[href='/community']");
    await communityLink.click();
    await page.waitForURL("**/community");
    await page.waitForTimeout(300);

    // Verify navigated to Community page
    assert(page.url().includes("/community"), "Navigated cleanly to /community");

    // Verify menu panel is automatically closed after navigation
    const isPanelClosedAfterNav = !(await panel.isVisible());
    assert(isPanelClosedAfterNav, "Menu panel automatically closed upon link selection");

    // Verify audio continuity
    const headerAudioToggle = page.locator("header button[aria-label*='ambient']").first();
    const audioStateAfter = await headerAudioToggle.getAttribute("aria-pressed");
    assert(audioStateAfter === audioStateBefore, `Audio continuity maintained across route transition (was ${audioStateBefore}, remains ${audioStateAfter})`);

    await page.close();
  }

  // 6. Verify Desktop Header Unchanged and Visually Balanced
  console.log("\n[6] Verifying Desktop Header Visual Balance (1440px)...");
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const logoImg = await page.locator("header nav a[aria-label='MARS Wellbeing Home'] img");
    const logoBox = await logoImg.boundingBox();
    assert(logoBox !== null && logoBox.height >= 20 && logoBox.height <= 24, "Desktop logo height is ~22px, balanced in 44px header");

    const desktopNav = page.locator("header nav .hidden.md\\:flex");
    assert(await desktopNav.isVisible(), "Desktop navigation links are fully visible");

    const mobileBtn = page.locator("[data-testid='mobile-menu-trigger']");
    assert(!(await mobileBtn.isVisible()), "Mobile three-dot menu trigger is hidden on desktop");

    const desktopShotPath = path.join(OUTPUT_DIR, "desktop-header.png");
    await page.screenshot({ path: desktopShotPath, fullPage: false });
    console.log(`    -> Saved desktop screenshot: ${desktopShotPath}`);

    await page.close();
  }

  await browser.close();

  console.log("\n=========================================================");
  console.log(`Results: ${passedCount} passed, ${failedCount} failed`);
  console.log("=========================================================");

  if (failedCount > 0) {
    process.exit(1);
  }
}

runVerification().catch((err) => {
  console.error("Verification crashed:", err);
  process.exit(1);
});
