const {Given, When, Then} = require('cucumber');
let {setDefaultTimeout} = require("cucumber");
let homePagePO = require("../pages/HomePagePO.js");

setDefaultTimeout(60 * 1000);
var homePageTitle;

Given(/User launches url under test$/, function () {
    browser.waitForAngularEnabled(false);
    var url = "https://www.google.co.in/";
    console.log("Launching application :" + url);
    browser.get(url).then(function(){
        homePagePO.getPageTitle().then(function(text){
            console.log("******* Page Title ************* " +text );
            callback();
        });
    })
    console.log("Wait")
   });

// Given('User launches url under test', function () {
//     browser.waitForAngularEnabled(false);
//     var url = "https://www.google.co.in/";
//     console.log("Launching application :" + url)
//     browser.get(url);
//   });

Then('User should get page title as {string}', function (string) {
    console.log("Entering "+string+ " in search box.")
    homePagePO.enterSearchText(string).then(function(){
        callback();
    })
  });
