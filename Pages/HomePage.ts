import { Page, Locator, expect } from "@playwright/test";
import {enterText}from '../utilities/commonmethod'
import { reportStep } from '../utilities/allureutilities'
import data from '../TestData/Searchdata.json'
import log from '../utilities/logUtill'


export class HomePage {
    readonly page: Page;
    readonly SearchBox: Locator;
    readonly SearchBtnClick: Locator;
    readonly Suggestions: Locator;

    constructor(page: Page) {
        this.page = page;

        this.SearchBox = page.locator("#search-box-input");
        this.SearchBtnClick = page.locator("#inputValEnter");
        this.Suggestions = page.locator("//div[contains(@class,'HeaderStyle__AutoSuggestions')]//span//span"
            
        );
    }

    async homesearchproduct(value:string) {
        // Enter product name
        //await this.SearchBox.fill("shirt men");
        log.info("Check product Add to cart flow")
        await reportStep('enterering value into searchbox',async()=>{
        enterText(this.SearchBox,value)

        });
        await this.Suggestions.first().click()
        // Wait for dropdown suggestions
        // await expect(this.Suggestions.first()).toBeVisible({
           
        //});

        // Click first suggestion
       // await this.Suggestions.first().click()
    }
}
