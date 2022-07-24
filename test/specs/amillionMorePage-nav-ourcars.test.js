const Page = require('../../pageobjects/a-million-more-page');
const expectchai = require('chai').expect
const fs = require('fs')
let hybridsCarsList = JSON.parse(fs.readFileSync('test/testData/hybridsCarsTest.json'))

describe("A Million More Page Test", () => {
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

    xit('Checking Navbar Our Cars Show Button', async () => {
		await Page.btnNavOurCars.scrollIntoView()
		await Page.btnNavOurCars.click()
		console.log(await Page.navCarMenuDesktop.getAttribute("aria-hidden"))
		expectchai(await Page.navCarMenuDesktop.getAttribute("aria-hidden")).to.be.equal('false')

		await Page.btnNavCarsMenuCloseIcon.click()
		expectchai(await Page.navCarMenuDesktop.getAttribute("aria-hidden")).to.be.equal('true')
	})

	hybridsCarsList.forEach(({ id, name, categoryTitle, carDetailsCount, carDetails }) => {
		it('Checking Navbar Hybrids Plug-in hybrids Cars List - ' + name, async () => {
			await Page.btnNavOurCars.scrollIntoView()
			await Page.btnNavOurCars.click()
			expectchai(await Page.navCarMenuDesktop.getAttribute("aria-hidden")).to.be.equal('false')

            // await (await $("#site-nav-cars-menu-section-panel-" + id)).setAttribute("aria-selected", "true")

			// expectchai(await $("#site-nav-cars-menu-section-panel-" + id).getAttribute("aria-hidden")).to.be.equal('false')

			const hybridsCarsCategoryTitleList = await $$("#site-nav-cars-menu-section-panel-" + id + " div[role='list'] a[data-autoid='nav:carCategoryTitle']")
			for (var j = 0; j < await hybridsCarsCategoryTitleList.length; j++) {
				expectchai(await hybridsCarsCategoryTitleList[j].getText()).to.equal(await categoryTitle[j])
			}

            const hybridsCarsList = await $$("#site-nav-cars-menu-section-panel-"+id+" div[role='listitem']") 
			expectchai(await hybridsCarsList.length).to.equal(carDetailsCount)

			for (var j = 0; j < await hybridsCarsList.length; j++) {
				expectchai(await hybridsCarsList[j].$("em[data-autoid='nav:carName']").getText()).to.equal(await carDetails[j].carName)
				expectchai(await hybridsCarsList[j].$("img[data-autoid='nav:carImage']").getAttribute('src')).to.equal(await carDetails[j].imagePath)

			}
		})
	})
});