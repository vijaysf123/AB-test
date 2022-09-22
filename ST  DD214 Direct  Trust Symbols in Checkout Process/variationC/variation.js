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

    var eg_str =''+ 
'  <div class="eg_wrapper">'+ 
'      <div class="eg_veteran">'+ 
'          <img src="https://dd214direct.com/dist/img/dd214-badge-white.848e5c5.png" alt="" srcset="">'+ 
'      </div>'+ 
'      <div class="eg_middle">'+ 
'          <img src="https://seal-sandiego.bbb.org/logo/fbhzbul/bbb-1000041035.png" alt="" srcset="">'+ 
'      </div>'+ 
'      <div class="eg_secure">'+ 
'          <img src="https://expogrowth.in/wp-content/uploads/2022/09/Badge_Secure-Payment.jpg" alt="" srcset="">'+ 
'      </div>'+ 
'  </div>';


    function init() {
      // document.querySelector("#__layout > div > div:nth-child(2) > div.footer-helper").insertAdjacentHTML("beforebegin", eg_str)
      document.querySelector("#__layout > div > div:nth-child(2) > div.order-page.container-fluid").insertAdjacentHTML("afterend", eg_str)

    }
    /* Initialize variation */
    waitForElement("#__layout div.order-page", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
