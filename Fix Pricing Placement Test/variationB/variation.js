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
    const mall = document.querySelector("#pdp--title > p > span").innerText;

    var htmlString =''+ 
'  <div class="eg_price">'+ 
'      <h3 class="eg_icon">'+mall+'</h3>'+ 
'      <h3>Free Returns and exchanges</h3 </div>';

    function init() {
      document.querySelector("#pdp--form > fieldset").insertAdjacentHTML("afterend", htmlString)
        }
    /* Initialize variation */
    waitForElement("#pdp #pdp--details", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
