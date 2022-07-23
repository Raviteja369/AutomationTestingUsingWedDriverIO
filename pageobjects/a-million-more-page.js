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

    get navMenuList(){
        return $$("div [data-autoid='nav:sideNavLinksMenu'] div[role='listitem']")
    }

    get btnNavClose() {
        return $('button[data-autoid="nav:siteNavCloseIcon"]')
    }

    get navList() {
        return $('nav[id="nav:sideNavigation"]')
    }

    get videoTestimonialsHeading(){
        return $("div[class='ay bw bx by c n o s']")
    }

    get childVideosList(){
        return $$("div[class='ay bw bx by c cn gc jl jm jn n']")
    }

    open() {
        return browser.url(browser.options.baseUrl)  // browser.options.baseUrl
        // https://www.volvocars.com/intl/v/car-safety/a-million-more
    }
}

module.exports = new AMillionMorePage();
