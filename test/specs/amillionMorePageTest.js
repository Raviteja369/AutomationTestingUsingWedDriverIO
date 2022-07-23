const Page = require('../../pageobjects/a-million-more-page');
const expectchai = require('chai').expect

describe("A Million More Page Test", () => {
    /**
     * Open The Page: https://www.volvocars.com/intl/v/car-safety/a-million-more
     * Accept Cookies
     */
    before(async () => {
        Page.open()
        await Page.btnAcceptCookies.waitForDisplayed()
        await Page.btnAcceptCookies.click()
    })
    after(async () => {
        await browser.pause(1000)
    })

    it('Checking Navbar Show Button', async () => {
        await Page.btnNav.scrollIntoView()
        await Page.btnNav.click()
        expectchai(await Page.navList.isDisplayedInViewport()).to.be.true
    })

    it('Checking Navbar Close Button', async () => {
        await Page.btnNavClose.click()
        expectchai(await Page.navList.isDisplayedInViewport()).to.be.false
    })
})