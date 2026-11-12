import { Page, Locator } from '@playwright/test';

export async function enterText(
    locator: Locator,
    text: string
) {
    await locator.fill(text, { timeout: 15000 });
}