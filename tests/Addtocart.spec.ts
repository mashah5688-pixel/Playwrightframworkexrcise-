
import { test, expect } from "@playwright/test";
import { AddToCart } from "../pages/Addtocart"

test("Add product to cart", async ({ page }) => {

    const addToCart = new AddToCart(page);

    await page.goto(
        "https://www.snapdeal.com/product/vdlooks-cotton-blend-regular-fit/8070451210415092815"
    );

    await addToCart.clickAddToCart();

    await page.waitForTimeout(2000);

});
