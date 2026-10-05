import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();

  // Desktop Screenshot
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'screenshot_desktop.png', fullPage: true });

  // Mobile Screenshot
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobilePage.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'screenshot_mobile.png', fullPage: true });

  await browser.close();
  console.log('Screenshots saved successfully!');
})();
