const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const VIEWPORTS = [
  { name: "390px-iphone", width: 390, height: 844 },
  { name: "375px-compact", width: 375, height: 812 },
  { name: "360px-narrow-android", width: 360, height: 800 },
  { name: "768px-tablet-portrait", width: 768, height: 1024 },
  { name: "1024px-tablet-landscape", width: 1024, height: 768 },
  { name: "1280px-desktop-small", width: 1280, height: 800 },
  { name: "1440px-desktop-standard", width: 1440, height: 900 },
];

const OUTPUT_DIR = path.join(
  process.env.USERPROFILE || "C:\\Users\\devns",
  ".gemini",
  "antigravity",
  "brain",
  "bd0ac09d-51c6-4fd5-8a61-9313dbb3143f",
  "apple-redesign-verification"
);

async function runVerification() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("=================================================");
  console.log("MARS Wellbeing — Apple India Redesign Verification");
  console.log("=================================================");

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

  try {
    // 1. Viewport Overflow & Responsive Tests
    console.log("\n[1] Testing Responsive Viewports & Horizontal Overflow...");
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
      });

      // Avoid showing welcome modal during automated screenshot runs
      await page.addInitScript(() => {
        sessionStorage.setItem("mars_welcome_dismissed", "true");
      });

      await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
      await page.waitForTimeout(500);

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
        `Viewport ${vp.name} (${vp.width}x${vp.height}): docWidth (${overflow.docWidth}px) <= winWidth (${overflow.winWidth}px)`
      );

      // Capture screenshot for this viewport
      const screenshotPath = path.join(OUTPUT_DIR, `viewport-${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });

      await page.close();
    }

    // 2. Desktop Section-by-Section Visual Inspection
    console.log("\n[2] Testing Desktop Sections & Visual Components...");
    const desktopPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });

    await desktopPage.addInitScript(() => {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    });

    await desktopPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
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
      await page.waitForTimeout(800);
    }

    await scrollPage(desktopPage);

    // Capture full-page desktop screenshot for side-by-side comparison
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "apple-mars-fullpage-desktop.png"),
      fullPage: true,
    });

    // Top Announcement Ribbon & 44px Navigation Bar
    const headerHeight = await desktopPage.$eval("header nav", (el) => el.clientHeight);
    assert(headerHeight === 44, `Navigation bar height is exactly 44px (${headerHeight}px found)`);

    // Hero Section
    const heroHeadline = await desktopPage.$eval(
      "#hero-arrival h1",
      (el) => el.textContent.trim()
    );
    assert(
      heroHeadline.includes("Make space for yourself"),
      `Hero headline displays: "${heroHeadline}"`
    );
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "01-hero-section.png"),
    });

    // Highland Care links
    const highlandCareLinks = await desktopPage.$$eval(
      'a[href="https://hcmhospital.com/"]',
      (els) => els.length
    );
    assert(
      highlandCareLinks >= 2,
      `Highland Care link to https://hcmhospital.com/ present (${highlandCareLinks} instances found)`
    );

    // Pillars Section
    const pillars = await desktopPage.$("#explore");
    assert(!!pillars, "Pillars section (#explore) is present");
    await pillars.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "02-pillars-section.png"),
    });

    // Nova Hikari Section
    const novaHikari = await desktopPage.$("#nova-hikari");
    assert(!!novaHikari, "Nova Hikari section (#nova-hikari) is present");
    await novaHikari.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);

    // Test stage clicking in Nova Hikari
    const stage2Btn = await desktopPage.$('button:has-text("02")');
    if (stage2Btn) {
      await stage2Btn.click();
      await desktopPage.waitForTimeout(300);
      const activeStageText = await desktopPage.$eval(
        "#nova-hikari h3",
        (el) => el.textContent.trim()
      );
      assert(
        activeStageText === "Grounding",
        `Nova Hikari stage 02 clicked successfully, active stage is "${activeStageText}"`
      );
    }
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "03-nova-hikari-section.png"),
    });

    // Trust & Story Section (Team + Highland Care + Bharat Mandapam)
    const trustSection = await desktopPage.$("#about");
    assert(!!trustSection, "Trust & Story section (#about) is present");
    await trustSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);

    const teamCardsCount = await desktopPage.$$eval(
      '#about img[alt*="Dr."]',
      (els) => els.length
    );
    assert(
      teamCardsCount === 4,
      `All 4 medical team portraits rendered (${teamCardsCount} found)`
    );

    const bharatMandapamImg = await desktopPage.$(
      'img[alt*="Bharat Mandapam"]'
    );
    assert(!!bharatMandapamImg, "Bharat Mandapam milestone image rendered");

    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "04-trust-and-team-section.png"),
    });

    // Final CTA & Early Access Form
    const earlyAccessSection = await desktopPage.$("#early-access");
    assert(!!earlyAccessSection, "Final CTA section (#early-access) is present");
    await earlyAccessSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);

    const ctaHeadline = await desktopPage.$eval(
      "#early-access h2",
      (el) => el.textContent.trim()
    );
    assert(
      ctaHeadline.includes("Be among the first to experience MARS"),
      `CTA headline is: "${ctaHeadline}"`
    );

    const phoneLink = await desktopPage.$(
      'a[href="tel:+919006219668"]'
    );
    assert(!!phoneLink, "Team guidance phone link (+91 90062 19668) rendered");

    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "05-early-access-cta.png"),
    });

    // Footer
    const footer = await desktopPage.$("footer");
    assert(!!footer, "Footer is present");
    await footer.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    await desktopPage.screenshot({
      path: path.join(OUTPUT_DIR, "06-footer.png"),
    });

    await desktopPage.close();

    // Capture Mobile Full-Page Screenshot
    console.log("\n[3] Testing Mobile Full Page Visual...");
    const mobilePage = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    await mobilePage.addInitScript(() => {
      sessionStorage.setItem("mars_welcome_dismissed", "true");
    });
    await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await scrollPage(mobilePage);
    await mobilePage.screenshot({
      path: path.join(OUTPUT_DIR, "apple-mars-fullpage-mobile.png"),
      fullPage: true,
    });
    await mobilePage.close();

    // 4. Welcome Modal Verification
    console.log("\n[4] Testing Welcome Modal...");
    const modalPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    // Do NOT dismiss modal, let it appear
    await modalPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
    const modalDialog = await modalPage.waitForSelector('div[role="dialog"]', { timeout: 8000 });
    assert(!!modalDialog, "Welcome Modal appeared after delay");
    if (modalDialog) {
      const modalHeading = await modalPage.$eval(
        "#welcome-modal-heading",
        (el) => el.textContent.trim()
      );
      assert(
        modalHeading.includes("Not sure where to start?"),
        `Modal heading is: "${modalHeading}"`
      );
      await modalPage.screenshot({
        path: path.join(OUTPUT_DIR, "00-welcome-modal.png"),
      });

      // Close modal
      const closeBtn = await modalPage.$('button[aria-label="Close message"]');
      if (closeBtn) {
        await closeBtn.click();
        await modalPage.waitForTimeout(600);
        const isDialogInDom = await modalPage.evaluate(() => !!document.querySelector('div[role="dialog"]'));
        assert(!isDialogInDom, "Modal dismissed cleanly via close button");
      }
    }
    await modalPage.close();

  } catch (err) {
    console.error("Verification error:", err);
    failedTests++;
  } finally {
    await browser.close();
  }

  console.log("\n=================================================");
  console.log(`Verification Complete: ${passedTests} passed, ${failedTests} failed`);
  console.log("=================================================");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runVerification();
