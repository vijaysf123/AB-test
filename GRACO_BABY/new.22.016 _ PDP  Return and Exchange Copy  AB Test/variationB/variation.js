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
    '  <div class="eg_content"> <svg class="eg_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#91898b" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg> Free returns within 30 days.'+  
    '      <p class="eg_tooltip">Details'+ 
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