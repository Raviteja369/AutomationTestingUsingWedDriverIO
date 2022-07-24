const NavigationItem = require('./navigationItems')
const compareImage = require('./compareImages');
const expectchai = require('chai').expect

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
	
	get btnNavOurCars() {
		return $("button[data-di-id='#nav:topNavCarMenu']")
	}

	get tabHybridsCars() {
		return $("#site-nav-cars-menu-section-panel-1")
	}

	get hybridsListItemCars() {
		return $$("#site-nav-cars-menu-section-panel-1 div[role='listitem']")
	}

	get hybridsCarName() {
		return $("em[data-autoid='nav:carName']")
	}

	get hybridsCarImage() {
		return $("img[data-autoid='nav:carImage']")
	}


	get hybridsCarsCategoryTitle() {
		return $$("#site-nav-cars-menu-section-panel-1 div[role='list'] a[data-autoid='nav:carCategoryTitle']")
	}

	get btnNavCarsMenuCloseIcon() {
		return $("button[data-autoid='nav:carMenuCloseIcon']")
	}
	
	
	get navCarMenuDesktop() {
		return $("div[data-autoid='nav:carMenuDesktop']")
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

	get mainVideo(){
        return $('#Video-1')
    }

    get btnPauseVideo(){
        return $("div[class='a bz cj ck cl cm'] button")  // #Video-1 button button
    }
	
	async open() {
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

	async  verifyNavigationMenuList() {
		let navigationItems = await this.getNavigationItems();
		for (var i = 0; i < await this.navMainMenuTextList.length; i++) {
			expectchai(await this.navMainMenuTextList[i].getText()).to.equal(navigationItems[i].name)
		}

		expectchai(await this.navMainMenuTextList.length).to.equal(navigationItems.length)
	}

	async isPlaying() {
        let screen1 = await browser.saveScreenshot('.png')
        await browser.pause(2000)
        let screen2 = await browser.saveScreenshot('.png')
        return await compareImage.compareImages(screen1, screen2, 0.1)
      }
}

module.exports = new AMillionMorePage();
