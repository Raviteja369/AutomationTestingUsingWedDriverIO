const Page = require('../../pageobjects/a-million-more-page');
const expectchai = require('chai').expect
const fs = require('fs')
let navMenuList = JSON.parse(fs.readFileSync('test/testData/navigationMenuTest.json'))
let hybridsCarsList = JSON.parse(fs.readFileSync('test/testData/hybridsCarsTest.json'))

describe("A Million More Page - Side Menu Navigation Tests", () => {
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

	it('Verify page title exists', async () => {
		await expect(browser).toHaveTitle("A million more | Volvo Cars - International")
	})

	it('Verify navigation bar for menu button', async () => {
		await Page.btnNav.scrollIntoView()
		await Page.btnNav.click()
		expectchai(await Page.navList.isDisplayedInViewport()).to.be.true
	})

	navMenuList.forEach(({ id, name, count, subMenuItems }) => {
		it('Verify navigation bar for main menu and sub menu list of items text and count - ' + name, async () => {
			// Step -1 Checking Navbar Main Menu list items count
			await Page.btnNav.click()
			// Get Navigation array
			const navMainMenuList = await Page.navMainMenuList
			// Compare menu item text before click
			expectchai(await navMainMenuList[id].getText()).to.equal(await name)
			await navMainMenuList[id].click()
			// Get Sub menu array list.
			const navSubMenuBuyList = await Page.navSubMenuList

			// Step-2 Checking Navbar Sub Menu Buy list items with text comparison
			for (var j = 0; j < await navSubMenuBuyList.length; j++) {
				expectchai(await navSubMenuBuyList[j].getText()).to.equal(await subMenuItems[j])
			}
			// Check submenu count
			expectchai(await navSubMenuBuyList.length).to.equal(await count)
			await Page.btnNavBack.click()
			await Page.btnNavClose.click()
		})
	});

	it('Verify navigation bar for menu text and its items count', async () => {
		// Menu items list
		const navMenuList = await Page.navMainMenuList
		expectchai(await navMenuList.length).to.equal(5)

		// Menu items text list
		await Page.verifyNavigationMenuList()
	})

	it('Verify navigation bar for main menu and sub menu list of items count', async () => {
		// Step -1 Checking Navbar Main Menu list items count
		const navMainMenuList = await Page.navMainMenuList
		let navigationItems = await Page.getNavigationItems();
		expectchai(await navMainMenuList.length).to.equal(navigationItems.length)

		// Step-2 Checking Navbar Sub Menu Buy list items count
		await navMainMenuList[0].click()
		const navSubMenuBuyList = await Page.navSubMenuList
		expectchai(await navSubMenuBuyList.length).to.equal(6)
		await Page.btnNavBack.click()

		// Step-3 Checking Navbar Sub Own Buy list items count
		await navMainMenuList[1].click()
		const navSubMenuOwnList = await Page.navSubMenuList
		expectchai(await navSubMenuOwnList.length).to.equal(6)
		await Page.btnNavBack.click()

		// Step-4 Checking Navbar Sub About Volvo Buy list items count
		await navMainMenuList[2].click()
		const navSubMenuAboutList = await Page.navSubMenuList
		expectchai(await navSubMenuAboutList.length).to.equal(9)
		await Page.btnNavBack.click()

		// Step-5 Checking Navbar Sub Explore Buy list items count
		await navMainMenuList[3].click()
		const navSubMenuExploreList = await Page.navSubMenuList
		expectchai(await navSubMenuExploreList.length).to.equal(3)
		await Page.btnNavBack.click()

		// Step-6 Checking Navbar Sub More Buy list items count
		await navMainMenuList[4].click()
		const navSubMenuMoreList = await Page.navSubMenuList
		expectchai(await navSubMenuMoreList.length).to.equal(4)
		await Page.btnNavBack.click()

		// Step-7 Close the side menu
		await Page.btnNavClose.click()
		await browser.pause(300)
		expectchai(await Page.navList.isDisplayedInViewport()).to.be.false
	})

	
})