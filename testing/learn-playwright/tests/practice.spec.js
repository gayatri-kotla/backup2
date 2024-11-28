const {test,expect} = require('@playwright/test');

test("youtube page", async({page})=>{
    await page.goto("https://www.youtube.com/");
    const title = await page.title();
    console.log("title",title);
    await expect(page).toHaveTitle("YouTube")
})