import { chromium } from "playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

await fs.mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const errors = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  assert.match(await page.title(), /InsumoCheck/);
  assert.match(await page.locator("h1").innerText(), /cotações de fornecedores/i);
  assert.equal(await page.locator("#rows tr").count(), 1, "deve abrir com uma linha pronta para preencher");
  assert.equal(await page.locator("#print").count(), 1, "botão de impressão deve existir");
  const columns = await page.evaluate(() => {
    const main = document.querySelector(".grid > main").getBoundingClientRect();
    const aside = document.querySelector(".grid > aside").getBoundingClientRect();
    return { mainRight: main.right, asideLeft: aside.left };
  });
  assert.ok(columns.mainRight <= columns.asideLeft + 1, "as colunas desktop não podem se sobrepor: " + JSON.stringify(columns));

  const fillQuote = async (n, supplier, price) => {
    await page.locator('[data-key="product"]').nth(n).fill("Arroz");
    await page.locator('[data-key="supplier"]').nth(n).fill(supplier);
    await page.locator('[data-key="qty"]').nth(n).fill("5");
    await page.locator('[data-key="unit"]').nth(n).selectOption("kg");
    await page.locator('[data-key="price"]').nth(n).fill(String(price));
  };
  await fillQuote(0, "Fornecedor A", 120);
  await page.locator("#add").click();
  await fillQuote(1, "Fornecedor B", 100);
  const result = await page.locator("#breakdown").innerText();
  assert.match(result, /Fornecedor B/);
  assert.match(result, /20,00/);
  assert.equal(await page.locator("#products").innerText(), "1");
  assert.equal(errors.length, 0, errors.join("\n"));
  await page.screenshot({ path: "artifacts/insumocheck-desktop.png", fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(150);
  const widths = await page.evaluate(() => ({ viewport: window.innerWidth, page: document.documentElement.scrollWidth }));
  assert.ok(widths.page <= widths.viewport + 1, "a página não deve criar rolagem horizontal no celular: " + JSON.stringify(widths));
  await page.screenshot({ path: "artifacts/insumocheck-mobile.png", fullPage: true });
  assert.equal(errors.length, 0, errors.join("\n"));
  console.log("Browser smoke tests OK; screenshots saved.");
} finally {
  await browser.close();
}
