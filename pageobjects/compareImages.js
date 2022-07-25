const resemble = require('node-resemble-js');

/**
 * Analyses and compare images with Javascript. Use resemble to compare two images to check if They have different
 */

compareImages = (image1, image2, percentage) => {
  return new Promise(function (resolve, reject) {
    resemble(image1)
      .compareTo(image2)
      .onComplete(function (data) {
        data.getDiffImage().pack()
        if (data.misMatchPercentage > percentage) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
  })
};

module.exports = { 'compareImages': compareImages }