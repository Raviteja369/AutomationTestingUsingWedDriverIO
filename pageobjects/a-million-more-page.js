const NavigationItem = require('../pageobjects/navigationItems');

class AMillionMorePage {
	/**
	 * define selectors using getter methods
	 */
	get btnAcceptCookies() {
		return $('#onetrust-accept-btn-handler');
	}

	get btnNav() {
		return $('#sitenav-sidenav-toggle')
	}

	get navMainMenuList() {
		return $$("div [data-autoid='nav:sideNavLinksMenu'] div[role='listitem']")
	}

	get navMainMenuTextList() {
		return $$("div [data-autoid='nav:sideNavLinksMenu'] div[role='listitem'] em")
	}

	get mainMenuText() {
		return ["Buy", "Own", "About Volvo", "Explore", "More"]
	}

	get navSubMenuList() {
		return $$("div[role='listitem'] a[data-autoid='nav:sideNavLinksMenuItem']")
	}

	get btnNavBack() {
		return $("button[aria-label='Go back in Site Navigation']")
	}

	get btnNavClose() {
		return $('button[data-autoid="nav:siteNavCloseIcon"]')
	}

	get navList() {
		return $('nav[id="nav:sideNavigation"]')
	}

	get testimonialHeading() {
		return $("div[class='ay bw bx by c n o s']")
	}

	get childVideosList() {
		return $$("div[class='ay bw bx by c cn gc jl jm jn n']")
	}

	get childVideoTestimonialsTitle() {
		return $$("div[data-autoid='videoTestimonials:container'] em[class='a ab ac ae ag aj al ao aq as au be bg bi bk bl bn bo bq fd fh fk fn']")
	}

	get childVideoTestimonialsDescription() {
		return $$("div[data-autoid='videoTestimonials:container'] p[class='a ac ae aj ao as bd bf bj bm bp gj gk gl gm gn go gp gq js']")
	}

	open() {
		return browser.url(browser.options.baseUrl)  // browser.options.baseUrl
		// https://www.volvocars.com/intl/v/car-safety/a-million-more
	}

	async  getNavigationItems() {
		let buyNavigationItem = new NavigationItem('Buy', 6, ['Car Configurator', 'Fleet sales', 'Special Vehicles', 'Used cars', 'Diplomatic sales', 'Child seats'])       
		let ownNavigationItem = new NavigationItem('Own', 6, ['Support', 'Service & Repair', 'Accessories', 'Volvo Recall', 'Volvo experience', 'Volvo Cars app'])
		let aboutVolvoNavigationItem = new NavigationItem('About Volvo', 9, ['Our story', 'Sustainability', 'Safety', 'Our news', 'Careers', 'Investors', 'Suppliers', 'Awards', 'Experience Volvo Cars'])
		let exploreNavigationItem = new NavigationItem('Explore', 3, ['Recharge', 'Concepts', 'Electric cars'])
		let moreNavigationItem = new NavigationItem('More', 4, ['Contact Us', 'Media/Press', 'Investor Relations', 'Military Sales'])
		return [buyNavigationItem, ownNavigationItem, aboutVolvoNavigationItem, exploreNavigationItem, moreNavigationItem]
	}
}

module.exports = new AMillionMorePage();
