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

    get btnNavClose() {
        return $('button[data-autoid="nav:siteNavCloseIcon"]')
    }

    get navList() {
        return $('nav[id="nav:sideNavigation"]')
    }

    open() {
        return browser.url(browser.options.baseUrl)  // browser.options.baseUrl
        // https://www.volvocars.com/intl/v/car-safety/a-million-more
    }
}

module.exports = new AMillionMorePage();
