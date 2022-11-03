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
  
    function init() {
      document.querySelector("#__layout > div > main > div > section > form > div.ld-form__actions").insertAdjacentHTML("afterbegin",`<button class="eg_btn">Button</button>`);
     
      const btn = document.querySelector(".eg_btn")
      btn.addEventListener("click", function(){
        history.back()
      });

      if (window.location.href.indexOf('step-3') > 0) {
        btn.style.width = "50%"
      }
      else if (window.location.href.indexOf('step-4') > 0) {
        btn.style.width = "75%"
      }
      else if (window.location.href.indexOf('step-5') > 0) {
        btn.style.width = "100%"
      }

      // live('.eg_btn','click', function(){
      //   history.back()
      // });

    }

    waitForElement("#__layout > div > main > div > section > form > div.ld-form__actions", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();