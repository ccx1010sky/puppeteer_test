const puppeteer = require("puppeteer");
puppeteer.launch().then(async (browser) => {
  const page = (await browser.pages())[0];
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto("http://www.google.com");
  await page.screenshot({ path: "google.png" });
  await browser.close();
});
