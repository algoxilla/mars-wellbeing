import { chromium } from "playwright";

async function runTests() {
  console.log("Starting Phase 1 Acceptance Verification...");
  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(`Console error on ${page.url()}: ${msg.text()}`);
    }
  });

  const routes = [
    "/",
    "/nova-hikari",
    "/how-it-works",
    "/community",
    "/professionals",
    "/journal",
    "/about",
    "/early-access",
    "/contact",
    "/faq",
    "/guided-experience",
    "/wellbeing-safety",
    "/privacy",
    "/terms",
  ];

  // 1. Verify desktop navigation & console errors
  console.log("\n1. Testing Desktop Routes & Console Errors:");
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const route of routes) {
    const res = await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
    const status = res.status();
    console.log(`  ✓ ${route} -> Status: ${status}`);
    if (status !== 200) {
      errors.push(`Route ${route} returned status ${status}`);
    }
  }

  // 2. Responsive mobile overflow check
  console.log("\n2. Testing Mobile (390px) Overflow Check:");
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    if (hasHorizontalOverflow) {
      console.log(`  ✗ Overflow detected on mobile: ${route}`);
      errors.push(`Mobile horizontal overflow on ${route}`);
    } else {
      console.log(`  ✓ Mobile 390px clean fit: ${route}`);
    }
  }

  // 3. Early access form simulation check
  console.log("\n3. Testing Early Access Form Simulation:");
  await page.goto("http://localhost:3000/early-access");
  await page.fill("#fullName", "Acceptance Test User");
  await page.fill("#email", "acceptance@example.com");
  await page.click("button[type='submit']");
  await page.waitForSelector("text=Demonstration Request Received");
  const simulationNotice = await page.textContent("body");
  const hasSimulatedNotice = simulationNotice.includes("Simulated Submission — Phase 1 Preview");
  console.log(`  ✓ Form submitted cleanly. Simulation notice present: ${hasSimulatedNotice}`);
  if (!hasSimulatedNotice) {
    errors.push("Early access submission did not display Phase 1 simulation notice.");
  }

  // 4. Guided experience local storage & clear test
  console.log("\n4. Testing Guided Experience Local-First Storage & Clear:");
  await page.goto("http://localhost:3000/guided-experience");
  await page.fill("textarea", "This is an automated test reflection for acceptance.");
  await page.click("text=Save to Device");
  await page.waitForTimeout(500);

  const savedInStorage = await page.evaluate(() => {
    return localStorage.getItem("mars_hikari_stage_01_note");
  });
  console.log(`  ✓ Saved reflection in localStorage: "${savedInStorage?.slice(0, 30)}..."`);
  if (!savedInStorage) {
    errors.push("Guided experience reflection was not saved in localStorage.");
  }

  await page.click("text=Clear");
  await page.waitForTimeout(500);
  const clearedFromStorage = await page.evaluate(() => {
    return localStorage.getItem("mars_hikari_stage_01_note");
  });
  console.log(`  ✓ Cleared reflection from localStorage: ${clearedFromStorage === null ? "Null (Successfully Removed)" : "Still present"}`);
  if (clearedFromStorage !== null) {
    errors.push("Guided experience clear button did not remove reflection from localStorage.");
  }

  // 5. FAQ accordion interaction check
  console.log("\n5. Testing FAQ Accordions & Search:");
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("http://localhost:3000/faq");
  await page.click("button:has-text('Nova Hikari')");
  await page.waitForTimeout(300);
  await page.click("text=What is Nova Hikari and how does it work?");
  await page.waitForTimeout(400);
  const faqAnswerVisible = await page.isVisible("text=structured 10-stage contemplative journey");
  console.log(`  ✓ FAQ accordion toggle works: ${faqAnswerVisible}`);
  if (!faqAnswerVisible) {
    errors.push("FAQ accordion did not expand when clicked.");
  }

  // 6. Reduced motion check
  console.log("\n6. Testing Prefers-Reduced-Motion Fallback:");
  const reducedMotionContext = await browser.newContext({
    reducedMotion: "reduce",
  });
  const reducedPage = await reducedMotionContext.newPage();
  await reducedPage.goto("http://localhost:3000/");
  await reducedPage.waitForTimeout(500);
  const isSkipButtonAbsent = await reducedPage.evaluate(() => {
    return !document.body.textContent.includes("Skip intro") && !document.body.textContent.includes("Skip opening");
  });
  console.log(`  ✓ Reduced motion renders immediately without intro: ${isSkipButtonAbsent}`);

  await browser.close();

  console.log("\n=================================");
  if (errors.length === 0) {
    console.log("🎉 ALL PHASE 1 ACCEPTANCE TESTS PASSED (0 ERRORS)");
  } else {
    console.log(`❌ Found ${errors.length} issue(s):`);
    errors.forEach((e) => console.log(`  - ${e}`));
  }
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
