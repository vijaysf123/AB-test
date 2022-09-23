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

    // var eg_htmlString =''+ 
    // '      <div class="eg_popup">'+ 
    // '          <img src="https://expogrowth.in/wp-content/uploads/2022/09/dp.svg" alt="" srcset="">'+ 
    // '          <p class="eg_name">Katie</p>'+ 
    // '          <abbr>Destination Specialist</abbr>'+ 
    // '          <h4>Plan your dream trip</h4>'+ 
    // '          <p class="eg_detail">There’s no question too small. Start planning your dream Africa trip by talking to our Destination Specialists.</p>'+ 
    // '          <div class="eg_inr">'+ 
    // '              <a class="eg_contact" href="tel:02081062403">020 8106 2403</a>'+ 
    // '              <p>call us today from 09:00 - 17:30</p>'+ 
    // '          </div>'+ 
    // '          <p class="eg_btm">- OR -</p>'+ 
    // '          <a href="https://calendly.com/valentina-gaggero/30min?month=2022-09">BOOK AN APPOINTMENT</a>'+ 
    // '      </div>';
    
    var eg_htmlString =''+ 
    '      <div class="eg_popup">'+ 
    '          <img src="https://expogrowth.in/wp-content/uploads/2022/09/dp.svg" alt="" srcset="">'+ 
    '          <p class="eg_name">Katie</p>'+ 
    '          <abbr>Destination Specialist</abbr>'+ 
    '          <h4>Plan your dream trip</h4>'+ 
    '          <p class="eg_detail">There’s no question too small. Start planning your dream Africa trip by talking to our Destination Specialists.</p>'+ 
    '          <a class="eg_inr" href="tel:02081062403">'+ 
    '              <h3>020 8106 2403</h3>'+ 
    '              <p>call us today from 09:00 - 17:30</p>'+ 
    '          </a>'+ 
    '          <p class="eg_btm">- OR -</p>'+ 
    '          <a href="https://calendly.com/valentina-gaggero/30min?month=2022-09">BOOK AN APPOINTMENT</a>'+ 
    '      </div>';

    function init() {
      document.querySelector("body > main > div.lp-form-banner > div.lp-form-banner__image-wrapper").insertAdjacentHTML("beforebegin", eg_htmlString)
    }

    waitForElement("body > main > div.lp-form-banner > div.lp-form-banner__image-wrapper", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
