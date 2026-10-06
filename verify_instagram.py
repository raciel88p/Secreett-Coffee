import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Desktop screen
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:3000", wait_until="networkidle")
        await page.screenshot(path="/home/jules/verification/screenshots/ig_desktop.png", full_page=False)

        # Mobile screen
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844})
        await mobile_page.goto("http://localhost:3000", wait_until="networkidle")
        await mobile_page.screenshot(path="/home/jules/verification/screenshots/ig_mobile.png", full_page=False)

        await browser.close()

asyncio.run(main())
