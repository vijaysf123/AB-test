(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* all Pure helper functions */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var egString =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading">Lismore 70th</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%202" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%201" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/collections/all-collections/lismore">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';

var egString2 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading">Connoisseur</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%2015" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%2016" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/collections/all-collections/lismore-connoisseur">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';

var egString3 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading">Lismore 70th</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%205" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%206" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/collections/all-collections/lismore#aq=@categories%20==%20(%22lismore%22)&numberOfResults=20">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';

var egString4 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading">Monogram</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%2017" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%2018" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/crystal-engraving/engraving-by-type/monogram">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';

var egString5 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading"> Waterford Wedding Gifts</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%209" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%2010" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/gift-ideas/gifts-by-occasion/wedding-and-anniversary">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';

var egString6 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading">Engagement Gift Ideas</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%2011" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%2012" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/gift-ideas/gifts-by-occasion/engagement-gifts">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';


var egString7 =''+ 
'  <div class="eg_container">'+ 
'      <p class="eg_heading"> Ocean Mastercraft</p>'+ 
'  '+ 
'      <img class="eg_img_desk" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-desktop/Rectangle%2019" alt="">'+ 
'  '+ 
'      <img class="eg_img_mob" src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/test-1201-navigation-promo-tiles-mobile/Rectangle%2020" alt="">'+ 
'  '+ 
'      <a href="https://www.waterford.com/en-us/collections/waterford-mastercraft/ocean-mastercraft">SHOP COLLECTION</a>'+ 
'  '+ 
'  </div>';


    function init() {

      
      /***Collections */
      document.querySelector("#primaryNavigation > ul > li:nth-child(2) > ul > li:nth-child(5)").insertAdjacentHTML("afterend", egString);

      /*******Connoisseur */
      document.querySelector("#primaryNavigation > ul > li:nth-child(3) > ul > li.col-lg-3.col-xl-2").insertAdjacentHTML("afterend", egString2);

      /***Home */
      document.querySelector("#primaryNavigation > ul > li:nth-child(4) > ul > li:nth-child(4)").insertAdjacentHTML("afterend", egString3);

      /***Monogram */
      document.querySelector("#primaryNavigation > ul > li:nth-child(5) > ul > li:nth-child(3)").insertAdjacentHTML("afterend", egString4);

      /** Waterford Wedding Gifts */
      document.querySelector("#primaryNavigation > ul > li:nth-child(6) > ul > li.col-lg-3.col-xl-2").insertAdjacentHTML("afterend", egString5);

      /** Engagement  Gifts */
      document.querySelector("#primaryNavigation > ul > li:nth-child(7) > ul > li:nth-child(5)").insertAdjacentHTML("afterend", egString6);

      /** Engagement  Gifts */
      document.querySelector("#primaryNavigation > ul > li:nth-child(9) > ul > li:nth-child(3)").insertAdjacentHTML("afterend", egString7);

    }
    

    waitForElement("#primaryNavigation > ul", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();