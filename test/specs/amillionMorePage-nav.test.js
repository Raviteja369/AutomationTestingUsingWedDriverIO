const Page = require('../../pageobjects/a-million-more-page');
const expectchai = require('chai').expect

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

	it('Verify page title exists', async () => {
		await expect(browser).toHaveTitle("A million more | Volvo Cars - International")
	})

	it('Checking Navbar Show Button', async () => {
		await Page.btnNav.scrollIntoView()
		await Page.btnNav.click()
		expectchai(await Page.navList.isDisplayedInViewport()).to.be.true
	})

	it('Checking Navbar Menu and Menu text list of Items count', async () => {
		// Menu items list
		const navMenuList = await Page.navMainMenuList
		expectchai(await navMenuList.length).to.equal(5)

		// Menu items text list
		await Page.verifyNavigationMenuList()
		
		// const navMainMenuTextList = await Page.navMainMenuTextList
		// let navigationItems = await Page.getNavigationItems();
		// for (var i = 0; i < await navMainMenuTextList.length; i++) {
		// 	expectchai(await navMainMenuTextList[i].getText()).to.equal(navigationItems[i].name)
		// }

		// expectchai(await navMainMenuTextList.length).to.equal(navigationItems.length)
	})

	it('Checking Navbar Main Menu and All Sub Menu List of Items count', async () => {
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

	it('Checking Navbar Main Menu and All Sub Menu List of Items text and count', async () => {
		// Step -1 Checking Navbar Main Menu list items count
		await Page.btnNav.click()
		const navMainMenuList = await Page.navMainMenuList
		let navigationItems = await Page.getNavigationItems();
		expectchai(await navMainMenuList.length).to.equal(navigationItems.length)

		// Need to improve the process it close very faster
		for (var i = 0; i < await navMainMenuList.length; i++) {
			expectchai(await navMainMenuList[i].getText()).to.equal(await navigationItems[i].name)
			await navMainMenuList[i].click()
			const navSubMenuBuyList = await Page.navSubMenuList
			await browser.pause(2000)
			// Step-2 Checking Navbar Sub Menu Buy list items text and count
			for (var j = 0; j < await navSubMenuBuyList.length; j++) {
				expectchai(await navSubMenuBuyList[j].getText()).to.equal(await navigationItems[i].subMenuItems[j])
			}
			expectchai(await navSubMenuBuyList.length).to.equal(await navigationItems[i].count)
			await Page.btnNavBack.click()
		}

		// for (var i = 0; i < await navMainMenuList.length; i++) {
		// 	expectchai(await navMainMenuList[i].getText()).to.equal(navigationItems[i].name)
		// 	await navMainMenuList[i].click()
		// 	const navSubMenuBuyList = await Page.navSubMenuList
		// 	// Step-2 Checking Navbar Sub Menu Buy list items text and count			
		// 	for (var j = 0; j < await navSubMenuBuyList.length; j++) {
		// 		expectchai(await navSubMenuBuyList[j].getText()).to.equal(navigationItems[i].subMenuItems[j])
		// 	}
		// 	expectchai(await navSubMenuBuyList.length).to.equal(navigationItems[i].count)
		// 	await Page.btnNavBack.click()
		// }
	})

	it('Checking Navbar Close Button', async () => {
		await Page.btnNavClose.click()
		await browser.pause(300)
		expectchai(await Page.navList.isDisplayedInViewport()).to.be.false
	})
})