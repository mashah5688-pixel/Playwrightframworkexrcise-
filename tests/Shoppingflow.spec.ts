
import { test } from "../Fixtures/myfixtures";
import { SearchPage } from "../Pages/SearchPage";
import { AddToCart } from "../Pages/Addtocart";
import data from "../TestData/Searchdata.json";
import log from "../utilities/logUtill";

for (let d of data) 
    {

    test(`Snapdeal Shopping Flow: ${d.Scenario}`, async ({ page, HomePage }) => {

        test.setTimeout(90000);

        await page.goto("https://www.snapdeal.com/");

        await HomePage.homesearchproduct(d.searchdata);

        const searchPage = new SearchPage(page);

        const productPage = await searchPage.clickProduct();


        const addToCart = new AddToCart(productPage);

        await addToCart.clickAddToCart();

        console.log("Shopping Flow Completed Successfully");

    });
}
