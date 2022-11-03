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

    var customString =''+ 
'  <section class="eg_container">'+ 
'      <div class="eg_row">'+ 
'          <div class="eg_content">'+ 
'              <h2>Start your free trial now</h2>'+ 
'              <p class="eg_para">No commitment, no ads, no hassle. Watch on any device. Cancel any time with a monthly subscription, or save with an annual plan.</p>'+ 
'              <a href="https://www.britbox.com/us/account/signup">Try free for 7 days</a>'+ 
'              <p class="eg_small">Free 7-day trial, then just $7.99/month or $79.99/year</p>'+ 
'              <img src="https://www.britbox.com/Content/img/Logo_Britbox_color_V2.png" alt="" srcset="">'+ 
'          </div>'+ 
'      </div>'+ 
'  </section>';

function init(){

  document.querySelector("main #page-block-u0ux7mqdsri").insertAdjacentHTML("afterend", customString)

}
    /* Initialize variation */
    waitForElement("main #page-block-u0ux7mqdsri", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

