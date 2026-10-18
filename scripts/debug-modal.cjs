const { chromium } = require("playwright");

async function testModal() {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  console.log("Waiting for modal dialog...");
  const dialog = await page.waitForSelector('div[role="dialog"]', { timeout: 8000 });
  console.log("Dialog found:", !!dialog);

  const closeBtn = await page.$('button[aria-label="Close message"]');
  console.log("Close button found:", !!closeBtn);
  if (closeBtn) {
    const box = await closeBtn.boundingBox();
    console.log("Close button bounding box:", box);
    await closeBtn.click();
    console.log("Clicked close button.");
    await page.waitForTimeout(1000);
    const dialogAfter = await page.$('div[role="dialog"]');
    console.log("Dialog present after click:", !!dialogAfter);
    if (dialogAfter) {
      const html = await page.evaluate(() => document.querySelector('div[role="dialog"]')?.outerHTML?.slice(0, 200));
      console.log("Dialog HTML:", html);
    }
  }
  await browser.close();
}

testModal().catch(console.error);
