const puppeteer = require("puppeteer");

puppeteer.launch().then(async (browser) => {
  const page = (await browser.pages())[0];
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto("https://www.google.com");
//   const xpathResult = await page.$x("//button[contains(., 'I agree')]"); // <- evaluate the xpath expression
//   if (xpathResult.length > 0) {
//     await xpathResult[0].click(); // <- clicking on the button
//   }
const selector = "//button[contains(., 'Accept all')]";
await page.evaluate((selector) => {
  const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const button = xpathResult.singleNodeValue;
  if (button) button.click();
}, selector);
  await page.screenshot({ path: "google-clicked.png" });
  await browser.close();
});

