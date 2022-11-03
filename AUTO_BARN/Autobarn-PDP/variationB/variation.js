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

    /* Variation functions */

   


    function init() {

      if(window.screen.width < 768){

        let elem = document.querySelector("main > div.container.main__inner-wrapper div.product-details.page-title")
        let tar= document.querySelector("main > div.container.main__inner-wrapper div.gallery-images-slider")
        
      tar.insertAdjacentElement("beforebegin", elem);

      let eg_one  = document.querySelector("main > div.container.main__inner-wrapper div.product-details.page-title div.rating-summary");
     
      let eg_two = document.querySelector("main > div.container.main__inner-wrapper  div.product-main-info")

      eg_two.parentNode.insertBefore(eg_one,eg_two)

      document.querySelector("div.product-details.page-title > div.sku").innerHTML = document.querySelector("div.product-details.page-title > div.sku").innerHTML.replace("SKU:", "<strong>SKU:</strong>").replace("Part Number.", "<strong>Part Number:</strong>");
      }
    }

    /* Initialize variation */
    waitForElement("main > div.container.main__inner-wrapper > div", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

