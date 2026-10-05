const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const screenshotsDir = '/home/jules/verification/screenshots';
  const videosDir = '/home/jules/verification/videos';

  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });
  if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: videosDir }
  });

  const page = await context.newPage();
  const filePath = `file://${path.resolve(__dirname, 'dist/index.html')}`;

  await page.goto(filePath);
  await page.waitForTimeout(1000);

  // Take desktop screenshot
  await page.screenshot({ path: path.join(screenshotsDir, 'verification.png'), fullPage: false });

  // Scroll CUJ user journey
  await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'smooth' }));
  await page.waitForTimeout(1000);

  await page.evaluate(() => window.scrollTo({ top: 1800, behavior: 'smooth' }));
  await page.waitForTimeout(1000);

  await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'smooth' }));
  await page.waitForTimeout(1000);

  await context.close();
  await browser.close();

  console.log('Verification Playwright script finished.');
})();
