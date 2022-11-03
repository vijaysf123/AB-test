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


function init(){

  const eg_title = document.querySelectorAll("#productTileTitle");

  eg_title.forEach((e) => {
      const eg_txt = e.textContent.match(/[0-9]+\s[a-zA-Z]+\s[0-9]+/i)[0];
      e.textContent = e.textContent.replace(eg_txt, `${eg_txt[0]} of 9`);
  });
}

    /* Initialize variation */
    waitForElement("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes > div > div.pdp-selector", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();