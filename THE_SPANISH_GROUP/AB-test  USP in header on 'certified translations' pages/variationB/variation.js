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
  
    let htmlStr = `<h3 class="eg_tile">Translating Over 90 Languages</h3>`
    let htmlStr2 = `<h3 class="eg_tile"> <span class="eg_one">Lightning Fast Delivery</span> <br/> <span class="eg_span">Same Day Delivery If Needed</span></h3>`
    let htmlStr3 = `<h3 class="eg_tile"> <span class="eg_one">100% Guaranteed Accepted Translated Documents</span></h3>`

function init(){


  if (window.location.href.indexOf('https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/') != -1) {
    document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr);
  } 
  else if (window.location.href.indexOf('https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/') != -1) {
    document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr2);
  } 
  else if (window.location.href.indexOf('https://thespanishgroup.org/translations/immigration-certificate-translation/') != -1) {
     document.querySelector("#header-img > section.template_banner .row div").insertAdjacentHTML("afterend", htmlStr3);
   } 
}
    /* Initialize variation */
    waitForElement("#header-img > section.template_banner .row div", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

