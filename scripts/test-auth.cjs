const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function run() {
  const artifactDir = "C:/Users/devns/.gemini/antigravity/brain/bd0ac09d-51c6-4fd5-8a61-9313dbb3143f";
  const outputDir = path.join(artifactDir, "auth-verification");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  console.log("1. Testing /login page...");
  await page.goto("http://localhost:3000/login", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "01-login-page.png"), fullPage: true });

  console.log("2. Testing /signup page...");
  await page.goto("http://localhost:3000/signup", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "02-signup-page.png"), fullPage: true });

  console.log("3. Testing /forgot-password page...");
  await page.goto("http://localhost:3000/forgot-password", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "03-forgot-password-page.png"), fullPage: true });

  console.log("4. Testing /dashboard (Member Sanctuary)...");
  await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "04-member-dashboard.png"), fullPage: true });

  console.log("5. Testing /admin (Admin Console)...");
  await page.goto("http://localhost:3000/admin", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "05-admin-console.png"), fullPage: true });

  console.log("6. Testing Homepage Early Access section...");
  await page.goto("http://localhost:3000/#early-access", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const earlyAccessSection = await page.$("#early-access");
  if (earlyAccessSection) {
    await earlyAccessSection.screenshot({ path: path.join(outputDir, "06-homepage-early-access.png") });
  }

  console.log("7. Testing /early-access page submission...");
  await page.goto("http://localhost:3000/early-access", { waitUntil: "networkidle" });
  await page.fill("#fullName", "Dr. Test Lead");
  await page.fill("#email", "testlead@marswellbeing.in");
  await page.fill("#city", "Bengaluru Central");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(outputDir, "07-early-access-submitted.png"), fullPage: true });

  console.log("8. Testing Header with Sign In link...");
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, "08-homepage-header-with-signin.png") });

  await browser.close();
  console.log("All visual verification tests completed successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
