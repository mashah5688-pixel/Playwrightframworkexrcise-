import{test as base} from '@playwright/test'
import * as commonMethods from '../utilities/commonmethod'
import { HomePage } from '../Pages/HomePage'
//import {use} from 'rect';

type customfixtures={
  HomePage :HomePage
}
export const test = base.extend<customfixtures>({
    HomePage :async ({page},use)=>{
        const HopmeP = new HomePage(page)
        await use(HopmeP)
    }
})