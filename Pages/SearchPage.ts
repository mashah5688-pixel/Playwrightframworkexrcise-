
import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {

    readonly page: Page;
    readonly ProductName: Locator;

    constructor(page: Page) {

        this.page = page;

        this.ProductName = page.locator(
            "a.dp-widget-link"
        ).filter({
            hasText: "VDLooks Cotton Blend Regular Fit"
        });
    }

    async clickProduct(): Promise<Page> {

        console.log(
            "Product count:",
            await this.ProductName.count()
        );

        await expect(
            this.ProductName.first()
        ).toBeVisible({ timeout: 20000 });

        console.log("Clicking product...");

        const popupPromise = this.page.waitForEvent("popup");

        await this.ProductName.first().click();

        const productPage = await popupPromise;

        await productPage.waitForLoadState("domcontentloaded");

        console.log("Product Page URL:", productPage.url());

        return productPage;
    }
}
