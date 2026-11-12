
import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";

test("Click on product", async ({ page, context }) => {

    const searchPage = new SearchPage(page);

    // Open search results
    await page.goto(
        "https://www.snapdeal.com/search?keyword=mens%20shirts"
    );

    await page.waitForLoadState("domcontentloaded");

    // Click on product and handle new tab
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        searchPage.clickProduct()
    ]);

    await newPage.waitForLoadState("domcontentloaded");

    console.log("Product URL:", newPage.url());

    await expect(newPage).toHaveURL(/product/);

});

