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

    var eg_disc = document.querySelector(" span.auto-deliver-text > span > span > og-incentive-text").innerText

    var htmlString =''+ 
'  <span class="auto-deliver-text">'+ 
'  			<span class="auto-deliver text14"><span class="font-weight-bold">Subscribe to save <og-incentive-text from="DiscountPercent">' + eg_disc  + 
'      <!----></og-incentive-text> : </span> Sign up for Auto-Ship to recieve shipments on a regular cadence & free shipping on orders over 10$'+ 
'  <og-tooltip class="og-pdp-tooltip ml-1" placement="left" tabindex="0">'+ 
'  '+ 
'      <div slot="trigger"><br><span class="og-tooltip"> <span class="og-tooltip-inner">i</span></span>'+ 
'      </div>'+ 
'      <div slot="content" class="og-tooltip-content">'+ 
'          <p>Save up to'+ 
'              <og-incentive-text from="DiscountPercent">'+ 
'                  <!---->'+ 
'                  30%'+ 
'                  <!---->'+ 
'              </og-incentive-text> when you enroll in Auto-Ship. Discount taken off the current site price. Free economy shipping on orders $10 or more. Swap your fragrance, skip, or cancel any time.'+ 
'          </p>'+ 
'          <p>Fragrance Family members receive 2X points on all Auto-Ship orders.</p>'+ 
'          <p>For more information, see our <a href="https://www.yankeecandle.com/on/demandware.store/Sites-homefragranceus-Site/en_US/Support-Show?cfid=auto-ship-faqs">Auto-Ship FAQ page.</a></p>'+ 
'      </div>'+ 
'  </og-tooltip>'+ 
'  </span>'+ 
'  </span>';

function init(){

  document.querySelector("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes > div.delivery-options > div > div > og-offer > og-when > div > span.auto-deliver-text > span").innerHTML = htmlString;

}
    /* Initialize variation */
    waitForElement("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes > div.delivery-options > div > div > og-offer > og-when > div > span.auto-deliver-text > span", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

