var EC = protractor.ExpectedConditions;
let searchBox = "//input[@title='Search']";

var HomePagePO = {

    enterSearchText: function (txt) {
        browser.wait(EC.visibilityOf(element(by.xpath(searchBox))), 60000);
        console.log("Entering " + txt + " in textbox.");
        return element(by.xpath(searchBox)).sendKeys("Protractor");
    },
    getPageTitle: function () {
        return browser.getTitle();
    },

}
module.exports = HomePagePO;