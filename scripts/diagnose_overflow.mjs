import { chromium } from "playwright";

async function diagnose() {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  for (const width of [1280, 1024]) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    await page.addInitScript(() => sessionStorage.setItem("mars_has_seen_opening", "true"));
    await page.goto("http://localhost:3000/?skip=true");
    await page.waitForTimeout(1000);

    const result = await page.evaluate((w) => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const header = document.querySelector("header");
      const headerWidth = header ? header.scrollWidth : 0;
      const headerClient = header ? header.clientWidth : 0;

      const elements = Array.from(document.querySelectorAll("body *"));
      const offending = [];
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 2) {
          offending.push({
            tag: el.tagName,
            id: el.id,
            class: (typeof el.className === "string" ? el.className : "").slice(0, 80),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
        }
      }
      return {
        viewportWidth: w,
        docWidth,
        scrollWidth,
        headerWidth,
        headerClient,
        offendingCount: offending.length,
        topOffenders: offending.slice(0, 5),
      };
    }, width);

    console.log(`\nWidth ${width}px diagnosis:`, JSON.stringify(result, null, 2));
    await page.close();
  }
  await browser.close();
}

diagnose().catch(console.error);
