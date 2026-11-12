# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Search.spec.ts >> Click on product
- Location: tests\Search.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a.dp-widget-link').filter({ hasText: 'VDLooks Cotton Blend Regular Fit' })

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class SearchPage {
  4  | 
  5  |     readonly page: Page;
  6  |     readonly ProductName: Locator;
  7  | 
  8  |     constructor(page: Page) {
  9  |         this.page = page;
  10 | 
  11 |         this.ProductName = page.locator(
  12 |             'a.dp-widget-link'
  13 |         ).filter({
  14 |             hasText: 'VDLooks Cotton Blend Regular Fit'
  15 |         });
  16 |     }
  17 | 
  18 |     async clickProduct() {
> 19 |         await this.ProductName.click();
     |                                ^ Error: locator.click: Target page, context or browser has been closed
  20 |     }
  21 | }
```