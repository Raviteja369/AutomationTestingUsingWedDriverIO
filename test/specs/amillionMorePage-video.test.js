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

    it('Verify page title', async () => {
        await expect(browser).toHaveTitle("A million more | Volvo Cars - International")
    })

    it('Verify the main video is playing or not by comparing the images', async () => {
        await Page.mainVideo.scrollIntoView()
        const isPlaying = await Page.isPlaying()
        expectchai(isPlaying).to.be.true
    })

    it('Verify the main video pause and play buttons are working', async () => {
        await Page.mainVideo.scrollIntoView()
        await Page.btnPauseVideo.click()
        let isVideoPaused = await Page.isPlaying()
        expectchai(await Page.btnPauseVideo.getAttribute("aria-label")).to.be.equal("play")
        expectchai(isVideoPaused).to.be.false
        await Page.btnPauseVideo.click()
        isVideoPlaying = await Page.isPlaying()
        expectchai(await Page.btnPauseVideo.getAttribute("aria-label")).to.be.equal("pause")
        expectchai(isVideoPlaying).to.be.true

    })


    it('Verify testimonial videos, title, description count', async () => {
        // Step- 1 Verify testimonial Videos count
        await Page.testimonialHeading.scrollIntoView()
        const videoTestimonialList = await Page.childVideosList
        expectchai(await videoTestimonialList.length).to.equal(4)

        // Step- 2 Verify testimonial Title count and either exists or not
        const videoTestimonialTitleList = await Page.childVideoTestimonialsTitle
        expectchai(await videoTestimonialTitleList.length).to.equal(4)

        // Step- 3 Verify testimonial Description count and either exists or not
        const videoTestimonialDescriptionList = await Page.childVideoTestimonialsDescription
        expectchai(await videoTestimonialDescriptionList.length).to.equal(4)
    })
});