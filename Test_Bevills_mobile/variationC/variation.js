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
   
//     var eg_String =''+ 
// '  <div class="eg_img">'+ 
// '  '+ 
// '      <img src="https://bevilleswebimages.s3.ap-southeast-2.amazonaws.com/Test%201.05%20-%20Eternity%20Club%20-%20Desktop.png" />'+ 
// '  '+ 
// '  </div>';

    var eg_string_mob =''+ 
'  <div class="eg_img_mob">'+ 
'  '+ 
'      <img src="https://bevilleswebimages.s3.ap-southeast-2.amazonaws.com/Test%201.05%20-%20Eternity%20Club%20-%20Mobile%20%231.png" />'+ 
'  '+ 
'  </div>';

function init(){
  // document.querySelector(".shopify-section > section > div > div > div.opt-shop-sale > div.opt-new-group").insertAdjacentHTML("afterend", eg_String);
  document.querySelector(".shopify-section > section > div > div > div.opt-shop-sale > div.opt-new-group").insertAdjacentHTML("afterend", eg_string_mob);
}
    /* Initialize variation */
    waitForElement(".shopify-section > section > div > div > div.opt-shop-sale > div.opt-new-group", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

