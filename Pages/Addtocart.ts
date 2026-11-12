
import { Page, Locator, expect } from "@playwright/test";

export class AddToCart {

    readonly page: Page;
    readonly AddToCartButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.AddToCartButton = page.locator("#add-cart-button-id" );
    }

    async clickAddToCart() {

        await expect(
            this.AddToCartButton
        ).toBeVisible({ timeout: 15000 });

        await this.AddToCartButton.click();

        console.log("Product added to cart");
    }
}
