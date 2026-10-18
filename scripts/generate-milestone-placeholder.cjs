const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        margin: 0;
        padding: 0;
        width: 1600px;
        height: 1000px;
        background: radial-gradient(circle at 50% 30%, #1A473E 0%, #0F2D27 60%, #081C18 100%);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #FAF7F2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
      }
      .grid-lines {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(to right, rgba(201, 161, 90, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(201, 161, 90, 0.08) 1px, transparent 1px);
        background-size: 80px 80px;
      }
      .arch-motif {
        position: absolute;
        width: 900px;
        height: 450px;
        border: 2px solid rgba(201, 161, 90, 0.25);
        border-radius: 450px 450px 0 0;
        bottom: 80px;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 28px;
        background: rgba(201, 161, 90, 0.15);
        border: 1px solid rgba(201, 161, 90, 0.4);
        border-radius: 9999px;
        color: #C9A15A;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-bottom: 28px;
        z-index: 10;
      }
      .title {
        font-size: 64px;
        font-weight: 700;
        color: #FAF7F2;
        text-align: center;
        margin: 0 0 16px 0;
        line-height: 1.1;
        letter-spacing: -0.02em;
        z-index: 10;
      }
      .subtitle {
        font-size: 24px;
        color: #A8B9A2;
        text-align: center;
        margin: 0 0 44px 0;
        font-weight: 300;
        letter-spacing: 0.02em;
        z-index: 10;
        max-width: 900px;
      }
      .card {
        background: rgba(15, 45, 39, 0.85);
        border: 1.5px dashed rgba(201, 161, 90, 0.5);
        border-radius: 20px;
        padding: 28px 48px;
        text-align: center;
        max-width: 820px;
        z-index: 10;
        backdrop-filter: blur(12px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
      .card-title {
        color: #C9A15A;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .card-desc {
        color: #FAF7F2;
        font-size: 17px;
        opacity: 0.9;
        line-height: 1.6;
      }
      .footer-note {
        position: absolute;
        bottom: 32px;
        color: #8E9C95;
        font-size: 14px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        z-index: 10;
      }
    </style>
  </head>
  <body>
    <div class="grid-lines"></div>
    <div class="arch-motif"></div>
    <div class="badge">National Presentation Milestone</div>
    <h1 class="title">Bharat Mandapam • New Delhi</h1>
    <p class="subtitle">Introducing the Mental Assistance Reassurance System (MARS) on the National Stage</p>
    <div class="card">
      <div class="card-title">Editorial Image Placeholder Frame</div>
      <div class="card-desc">
        Awaiting official event photograph upload.<br/>
        Place your high-resolution original image at: <br/>
        <code style="color: #C9A15A; font-family: monospace; font-size: 18px; font-weight: 600; display: inline-block; margin-top: 6px;">public/milestones/bharat-mandapam-launch.jpg</code>
      </div>
    </div>
    <div class="footer-note">MARS Wellbeing • Creating Spaces for a Better You</div>
  </body>
  </html>
  `;
  
  await page.setContent(html);
  if (!fs.existsSync('public/milestones')) {
    fs.mkdirSync('public/milestones', { recursive: true });
  }
  await page.screenshot({ path: 'public/milestones/bharat-mandapam-launch.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
  console.log('SUCCESS: public/milestones/bharat-mandapam-launch.jpg generated.');
})();
