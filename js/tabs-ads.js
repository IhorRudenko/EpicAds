
// -- tabs-ads ----------------------------------------------
const tabsAdsBtn = document.querySelectorAll(".tabs-ads__nav-btn");
const tabsAdsItems = document.querySelectorAll(".tabs-ads__item");

tabsAdsBtn.forEach(onTabAdsClick);

function onTabAdsClick(itemAds) {
   itemAds.addEventListener("click", function() {
        let currentAdsBtn = itemAds;
        let tabAdsId = currentAdsBtn.getAttribute("data-tab");
        let currentAdsTab = document.querySelector(tabAdsId);

        if( ! currentAdsBtn.classList.contains('active') ) {
         tabsAdsBtn.forEach(function(itemAds) {
            itemAds.classList.remove('active');
            });
    
            tabsAdsItems.forEach(function(itemAds) {
               itemAds.classList.remove('active');
            });
    
            currentAdsBtn.classList.add('active');
            currentAdsTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs-ads__nav-btn').click();
// -- /tabs-ads ----------------------------------------------


// -- tabs-inner-1 ----------------------------------------------
const tabsInnerBtn1 = document.querySelectorAll(".tabs-inner__nav-btn--1");
const tabsInnerItems1 = document.querySelectorAll(".tabs-inner__item--1");

tabsInnerBtn1.forEach(onTabInnerClick1);

function onTabInnerClick1(itemInner1) {
   itemInner1.addEventListener("click", function() {
      let currentInnerBtn1 = itemInner1;
      let tabInnerId1 = currentInnerBtn1.getAttribute("data-tab");
      let currentInnerTab1 = document.querySelector(tabInnerId1);

      if( ! currentInnerBtn1.classList.contains('active') ) {
      tabsInnerBtn1.forEach(function(itemInner1) {
         itemInner1.classList.remove('active');
         });
   
         tabsInnerItems1.forEach(function(itemInner1) {
            itemInner1.classList.remove('active');
         });
   
         currentInnerBtn1.classList.add('active');
         currentInnerTab1.classList.add('active');
      }
    });
}

document.querySelector('.tabs-inner__nav-btn--1').click();
// -- /tabs-inner-1 ----------------------------------------------


// -- tabs-inner-2 ----------------------------------------------
const tabsInnerBtn2 = document.querySelectorAll(".tabs-inner__nav-btn--2");
const tabsInnerItems2 = document.querySelectorAll(".tabs-inner__item--2");

tabsInnerBtn2.forEach(onTabInnerClick2);

function onTabInnerClick2(itemInner2) {
   itemInner2.addEventListener("click", function() {
      let currentInnerBtn2 = itemInner2;
      let tabInnerId2 = currentInnerBtn2.getAttribute("data-tab");
      let currentInnerTab2 = document.querySelector(tabInnerId2);

      if( ! currentInnerBtn2.classList.contains('active') ) {
      tabsInnerBtn2.forEach(function(itemInner2) {
         itemInner2.classList.remove('active');
         });
   
         tabsInnerItems2.forEach(function(itemInner2) {
            itemInner2.classList.remove('active');
         });
   
         currentInnerBtn2.classList.add('active');
         currentInnerTab2.classList.add('active');
      }
    });
}

document.querySelector('.tabs-inner__nav-btn--2').click();
// -- /tabs-inner-2 ----------------------------------------------




