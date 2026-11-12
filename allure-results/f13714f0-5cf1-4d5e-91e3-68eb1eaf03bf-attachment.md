# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Addtocart.spec.ts >> Add product to cart
- Location: tests\Addtocart.spec.ts:5:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from "@playwright/test";
  3  | import { AddToCart } from "../pages/Addtocart"
  4  | 
  5  | test("Add product to cart", async ({ page }) => {
  6  | 
  7  |     const addToCart = new AddToCart(page);
  8  | 
  9  |     await page.goto(
  10 |         "https://www.snapdeal.com/product/vdlooks-cotton-blend-regular-fit/8070451210415092815"
  11 |     );
  12 | 
  13 |     await addToCart.clickAddToCart();
  14 | 
> 15 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  16 | 
  17 | });
  18 | 
```