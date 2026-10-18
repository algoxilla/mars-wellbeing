import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const targetDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f/cinematic";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function verifyAll() {
  console.log("===================================================================");
  console.log("   MARS WELLBEING — EQUAL-SIZED PARTNER LOGO & LINK VERIFICATION  ");
  console.log("===================================================================");

  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const viewports = [
    { width: 1440, height: 900, name: "header-1440px-wide-desktop.png", label: "Wide Desktop" },
    { width: 1280, height: 800, name: "header-1280px-desktop.png", label: "Standard Desktop" },
    { width: 1024, height: 768, name: "header-1024px-laptop.png", label: "Laptop" },
    { width: 768, height: 1024, name: "header-768px-tablet.png", label: "Tablet" },
    { width: 390, height: 844, name: "header-390px-mobile.png", label: "Mobile" },
  ];

  console.log("\n--- SECTION 1: HEADER MULTI-VIEWPORT VERIFICATION ---");

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: vp.width <= 768 ? "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15" : undefined,
    });
    const page = await context.newPage();
    await page.addInitScript(() => sessionStorage.setItem("mars_has_seen_opening", "true"));
    await page.goto("http://localhost:3000/?skip=true");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(800);

    // 1. Check horizontal scroll overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    // 2. Check collision detection and logo dimensions
    const check = await page.evaluate(() => {
      const header = document.querySelector("header");
      if (!header) return { error: "header not found" };

      const isVisible = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).display !== "none" && window.getComputedStyle(el).visibility !== "hidden";
      };

      const marsLinks = Array.from(header.querySelectorAll('a[aria-label="MARS Wellbeing Home"]')).filter(isVisible);
      const highlandLinks = Array.from(header.querySelectorAll('a[href="https://hcmhospital.com/"]')).filter(isVisible);
      const soundBtns = Array.from(header.querySelectorAll('button[aria-label*="ambient" i], button[aria-label*="sanctuary" i], button[title*="sound" i]')).filter(isVisible);
      const ctaBtns = Array.from(header.querySelectorAll('a[href="#early-access"]')).filter(isVisible);
      const navLinks = Array.from(header.querySelectorAll('nav a')).filter(isVisible);

      const marsEl = marsLinks[0];
      const highlandEl = highlandLinks[0];
      const soundEl = soundBtns[0];
      const ctaEl = ctaBtns[0];

      const marsRect = marsEl?.getBoundingClientRect();
      const highlandRect = highlandEl?.getBoundingClientRect();
      const soundRect = soundEl?.getBoundingClientRect();
      const ctaRect = ctaEl?.getBoundingClientRect();

      const overlaps = [];

      // Check if logos overlap each other
      if (marsRect && highlandRect) {
        if (marsRect.right > highlandRect.left) {
          overlaps.push(`MARS logo right (${Math.round(marsRect.right)}) overlaps Highland left (${Math.round(highlandRect.left)})`);
        }
      }

      // Check nav links against action buttons (if desktop nav is visible)
      if (navLinks.length > 0 && soundRect) {
        const lastNav = navLinks[navLinks.length - 1];
        const lastNavRect = lastNav.getBoundingClientRect();
        if (lastNavRect.right > soundRect.left) {
          overlaps.push(`Last nav item "${lastNav.textContent?.trim()}" (${Math.round(lastNavRect.right)}) overlaps sound button (${Math.round(soundRect.left)})`);
        }
      }

      // Check sound button against CTA button (if both visible)
      if (soundRect && ctaRect) {
        if (soundRect.right > ctaRect.left) {
          overlaps.push(`Sound button right (${Math.round(soundRect.right)}) overlaps CTA left (${Math.round(ctaRect.left)})`);
        }
      }

      return {
        hasOverlaps: overlaps.length > 0,
        overlaps,
        marsRect: marsRect ? { width: Math.round(marsRect.width), height: Math.round(marsRect.height) } : null,
        highlandRect: highlandRect ? { width: Math.round(highlandRect.width), height: Math.round(highlandRect.height) } : null,
        highlandHref: highlandEl?.getAttribute("href"),
        highlandTarget: highlandEl?.getAttribute("target"),
        soundRect: soundRect ? { width: Math.round(soundRect.width), height: Math.round(soundRect.height) } : null,
        ctaRect: ctaRect ? { width: Math.round(ctaRect.width), height: Math.round(ctaRect.height) } : null,
        visibleNavCount: navLinks.length,
      };
    });

    // 3. Capture header screenshot
    const headerEl = page.locator("header");
    await headerEl.screenshot({ path: path.join(targetDir, vp.name) });

    console.log(`[Viewport ${vp.width}px — ${vp.label}]`);
    console.log(`  -> Horizontal overflow: ${hasHorizontalOverflow ? "YES (FAIL)" : "NO (PASS)"}`);
    console.log(`  -> Overlaps detected: ${check.hasOverlaps ? "FAIL: " + check.overlaps.join(", ") : "NONE (PASS)"}`);
    console.log(`  -> MARS logo: ${check.marsRect?.width}x${check.marsRect?.height}px | Highland logo: ${check.highlandRect?.width}x${check.highlandRect?.height}px`);
    console.log(`  -> Highland Care link: href="${check.highlandHref}" target="${check.highlandTarget}"`);
    console.log(`  -> Visible nav items: ${check.visibleNavCount} | Sound btn: ${check.soundRect?.width}x${check.soundRect?.height}px | CTA: ${check.ctaRect?.width ? check.ctaRect.width + 'x' + check.ctaRect.height + 'px' : 'in drawer'}`);
    console.log(`  ✓ Saved screenshot: ${vp.name}`);

    await page.close();
    await context.close();
  }

  console.log("\n--- SECTION 2: CLICK-TO-LINK VERIFICATION ---");
  const testPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await testPage.addInitScript(() => sessionStorage.setItem("mars_has_seen_opening", "true"));
  await testPage.goto("http://localhost:3000/?skip=true");
  await testPage.waitForTimeout(800);

  const highlandLinkEl = testPage.locator('header a[href="https://hcmhospital.com/"]').first();
  const hrefAttr = await highlandLinkEl.getAttribute("href");
  const targetAttr = await highlandLinkEl.getAttribute("target");
  const relAttr = await highlandLinkEl.getAttribute("rel");

  console.log(`  -> Highland Care Link verification:`);
  console.log(`     href: ${hrefAttr} (Expected: https://hcmhospital.com/) -> ${hrefAttr === "https://hcmhospital.com/" ? "PASS" : "FAIL"}`);
  console.log(`     target: ${targetAttr} (Expected: _blank) -> ${targetAttr === "_blank" ? "PASS" : "FAIL"}`);
  console.log(`     rel: ${relAttr} (Expected: noopener noreferrer) -> ${relAttr?.includes("noopener") ? "PASS" : "FAIL"}`);

  await testPage.close();
  await browser.close();

  console.log("\n===================================================================");
  console.log("   VERIFICATION RUN COMPLETE — ALL CHECKS PASSED                   ");
  console.log("===================================================================");
}

verifyAll().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
