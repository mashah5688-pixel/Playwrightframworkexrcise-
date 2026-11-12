//import {test,expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage.ts';
import data from'../TestData/Searchdata.json';
import {test} from '../Fixtures/myfixtures'

for(let d of data){
    test(`Negetive Login :${d.Scenario}`,async ({page,HomePage}) => {

    await page.goto('https://www.snapdeal.com/')
    //const  homePage = new HomePage(page)
    await HomePage.homesearchproduct(d.searchdata)
    

});
}

