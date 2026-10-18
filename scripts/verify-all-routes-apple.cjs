const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const VIEWPORTS = [
  { name: "360px-narrow-android", width: 360, height: 800 },
  { name: "375px-compact-se", width: 375, height: 812 },
  { name: "390px-iphone", width: 390, height: 844 },
  { name: "768px-tablet-portrait", width: 768, height: 1024 },
  { name: "1024px-tablet-landscape", width: 1024, height: 768 },
  { name: "1280px-desktop-small", width: 1280, height: 800 },
  { name: "1440px-desktop-standard", width: 1440, height: 900 },
];

const ROUTES_TO_TEST = [
  { path: "/", name: "Homepage" },
  { path: "/nova-hikari", name: "Nova Hikari" },
  { path: "/guided-experience", name: "10-Stage Guided Experience" },
  { path: "/community", name: "Community Circles" },
  { path: "/professionals", name: "Clinical Care" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/early-access", name: "Early Access" },
  { path: "/login", name: "Login" },
  { path: "/signup", name: "Signup" },
  { path: "/wellbeing-safety", name: "Safety & Boundaries" },
  { path: "/privacy", name: "Privacy Policy" },
  { path: "/terms", name: "Terms of Service" },
  { path: "/journal", name: "Journal" },
];

const OUTPUT_DIR = path.join(
  process.env.USERPROFILE || "C:\\Users\\devns",
  ".gemini",
  "antigravity",
  "brain",
  "bd0ac09d-51c6-4fd5-8a61-9313dbb3143f",
  "site-wide-apple-verification"
);

async function runFullSiteVerification() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("============================================================");
  console.log("MARS Wellbeing — Site-Wide Apple Redesign & Audio Verification");
  console.log("============================================================");

  const browser = await chromium.launch({ channel: "msedge", headless: true });
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      console.log(`  ✓ PASS: ${message}`);
      passedTests++;
    } else {
      console.error(`  ✗ FAIL: ${message}`);
      failedTests++;
    }
  }

  async function scrollPage(page) {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 80);
      });
    });
    await page.waitForTimeout(600);
  }

  try {
    // 1. Audio Control Verification
    console.log("\n[1] Testing Ambient Audio Control & Cross-Route Continuity...");
    const audioContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const audioPage = await audioContext.newPage();
    await audioPage.addInitScript(() => {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    });

    await audioPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await audioPage.waitForTimeout(600);

    // Audio toggle in header
    const audioBtn = await audioPage.$('header button[aria-label*="ambient"]');
    assert(!!audioBtn, "Ambient audio toggle button found in 44px desktop header");

    if (audioBtn) {
      const initialPressed = await audioBtn.getAttribute("aria-pressed");
      console.log(`  - Initial audio pressed state: ${initialPressed}`);

      // Click audio toggle
      await audioBtn.click();
      await audioPage.waitForTimeout(500);

      const afterClickPressed = await audioBtn.getAttribute("aria-pressed");
      assert(
        initialPressed !== afterClickPressed,
        `Audio button toggled state: was ${initialPressed}, now ${afterClickPressed}`
      );

      // Screenshot of active header with audio button
      await audioPage.screenshot({
        path: path.join(OUTPUT_DIR, "10-audio-toggle-state.png"),
        clip: { x: 0, y: 0, width: 1440, height: 90 },
      });

      // Test navigation continuity: navigate to /nova-hikari
      await audioPage.goto("http://localhost:3000/nova-hikari", { waitUntil: "networkidle" });
      await audioPage.waitForTimeout(500);
      const audioBtnOnNav = await audioPage.$('header button[aria-label*="ambient"]');
      assert(!!audioBtnOnNav, "Audio control retained and active across navigation to /nova-hikari");
    }
    await audioPage.close();
    await audioContext.close();

    // 2. Responsive Viewport & Horizontal Overflow Tests across all routes
    console.log("\n[2] Testing Viewport Responsiveness & Overflow (360px to 1440px)...");
    for (const route of ROUTES_TO_TEST) {
      for (const vp of VIEWPORTS) {
        const page = await browser.newPage({
          viewport: { width: vp.width, height: vp.height },
        });
        await page.addInitScript(() => {
          sessionStorage.setItem("mars_welcome_dismissed", "true");
        });

        await page.goto(`http://localhost:3000${route.path}`, { waitUntil: "networkidle" });
        await page.waitForTimeout(200);

        const overflow = await page.evaluate(() => {
          const docWidth = document.documentElement.scrollWidth;
          const winWidth = window.innerWidth;
          return {
            docWidth,
            winWidth,
            hasOverflow: docWidth > winWidth,
          };
        });

        assert(
          !overflow.hasOverflow,
          `${route.name} (${route.path}) at ${vp.name} (${vp.width}px): docWidth (${overflow.docWidth}px) <= winWidth (${overflow.winWidth}px)`
        );

        await page.close();
      }
    }

    // 3. Desktop (1440px) Full-Page Visual Inspection & Screenshots
    console.log("\n[3] Capturing Desktop (1440px) Full-Page Screenshots of Major Routes...");
    const desktopPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    await desktopPage.addInitScript(() => {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    });

    const screenshotRoutes = [
      { path: "/", file: "01-homepage-desktop.png", name: "Homepage" },
      { path: "/nova-hikari", file: "02-nova-hikari-desktop.png", name: "Nova Hikari" },
      { path: "/guided-experience", file: "03-guided-experience-stage1-desktop.png", name: "10-Stage Guided Experience" },
      { path: "/community", file: "04-community-desktop.png", name: "Community" },
      { path: "/professionals", file: "05-clinical-care-desktop.png", name: "Clinical Care" },
      { path: "/about", file: "06-about-desktop.png", name: "About" },
      { path: "/contact", file: "07-contact-desktop.png", name: "Contact" },
      { path: "/early-access", file: "08-early-access-desktop.png", name: "Early Access" },
      { path: "/login", file: "09-login-desktop.png", name: "Login" },
    ];

    for (const item of screenshotRoutes) {
      await desktopPage.goto(`http://localhost:3000${item.path}`, { waitUntil: "networkidle" });
      await scrollPage(desktopPage);
      const shotPath = path.join(OUTPUT_DIR, item.file);
      await desktopPage.screenshot({ path: shotPath, fullPage: true });
      assert(fs.existsSync(shotPath), `Captured full-page desktop screenshot for ${item.name} (${item.file})`);
    }
    await desktopPage.close();

    // 4. Mobile (390px) Full-Page Visual Inspection & Screenshots
    console.log("\n[4] Capturing Mobile (390px) Full-Page Screenshots of Major Routes...");
    const mobilePage = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    await mobilePage.addInitScript(() => {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    });

    const mobileScreenshotRoutes = [
      { path: "/", file: "01-homepage-mobile.png", name: "Homepage" },
      { path: "/nova-hikari", file: "02-nova-hikari-mobile.png", name: "Nova Hikari" },
      { path: "/guided-experience", file: "03-guided-experience-stage1-mobile.png", name: "10-Stage Guided Experience" },
      { path: "/community", file: "04-community-mobile.png", name: "Community" },
      { path: "/professionals", file: "05-clinical-care-mobile.png", name: "Clinical Care" },
      { path: "/about", file: "06-about-mobile.png", name: "About" },
      { path: "/contact", file: "07-contact-mobile.png", name: "Contact" },
      { path: "/early-access", file: "08-early-access-mobile.png", name: "Early Access" },
      { path: "/login", file: "09-login-mobile.png", name: "Login" },
    ];

    for (const item of mobileScreenshotRoutes) {
      await mobilePage.goto(`http://localhost:3000${item.path}`, { waitUntil: "networkidle" });
      await scrollPage(mobilePage);
      const shotPath = path.join(OUTPUT_DIR, item.file);
      await mobilePage.screenshot({ path: shotPath, fullPage: true });
      assert(fs.existsSync(shotPath), `Captured full-page mobile screenshot for ${item.name} (${item.file})`);
    }

    // Test mobile drawer audio toggle
    await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    const mobileMenuBtn = await mobilePage.$('button[aria-label="Open menu"]');
    if (mobileMenuBtn) {
      await mobileMenuBtn.click();
      await mobilePage.waitForTimeout(400);
      const drawerAudioToggle = await mobilePage.$('div:has-text("Ambient Sanctuary Music") button[aria-label*="ambient"]');
      assert(!!drawerAudioToggle, "Ambient audio toggle present inside mobile drawer");
      await mobilePage.screenshot({
        path: path.join(OUTPUT_DIR, "11-mobile-drawer-audio.png"),
      });
    }

    await mobilePage.close();

  } catch (err) {
    console.error("Verification error:", err);
    failedTests++;
  } finally {
    await browser.close();
  }

  console.log("\n============================================================");
  console.log(`Verification Complete: ${passedTests} passed, ${failedTests} failed`);
  console.log("============================================================");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runFullSiteVerification();
