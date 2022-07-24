const Page = require('../../pageobjects/a-million-more-page');
const PageModelIntro = require('../../pageobjects/a-million-more-modelIntro-page');
const expectchai = require('chai').expect

describe("A Million More Page Test-Model Intro", () => {
	/**
	 * Open The Page: https://www.volvocars.com/intl/v/car-safety/a-million-more
	 * Accept Cookies when initially page opens
	 */
	before(async () => {
		await Page.open()
		await Page.btnAcceptCookies.waitForDisplayed()
		await Page.btnAcceptCookies.click()
	})
	after(async () => {
		await browser.pause(800)
	})

    it('Verify page model intro header exists', async () => {
        expectchai(await PageModelIntro.modelIntroHeader.getText()).to.equal(PageModelIntro.modelIntroHeaderText)
	})

    it('Verify page model intro header paragraph exists', async () => {
        expectchai(await PageModelIntro.modelIntroParagraph.getText()).to.equal(PageModelIntro.modelIntroParagraphText)
	})
})
