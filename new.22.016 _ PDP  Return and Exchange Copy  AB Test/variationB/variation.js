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


    var egStr =''+ 
    '  <div class="eg_content"> Easy returns.'+  
    '      <p class="eg_tooltip">Learn More.'+ 
    '     <span class="eg_tooltipCont"><span>We want you to love everything you purchase from us - car seats, strollers,home and gear, and anything else. If for any reason you don\'t, even if you just change your mind , start our self-service return process by mail. '+ 
    '            <a href="#"><b>Click here for more info</b></a><span class="eg-tooltip-arrow"></span>'+ 
    '             </span></span>'+ 
    '             </p>'+ 
    '  </div>';

    function init() {
     document.querySelector("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes > div.shipping > p").insertAdjacentHTML("afterend", egStr);

     document.querySelector('div.shipping .eg_content .eg_tooltip').addEventListener('click',function(){
this.classList.toggle('eg-active');
});
     
    }
    /* Initialize variation */
    waitForElement("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes > div.shipping", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();