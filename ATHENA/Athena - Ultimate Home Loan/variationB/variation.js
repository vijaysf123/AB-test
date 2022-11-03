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

    var htmlString =''+ 
    '  <div class="eg_banner">'+ 
    '      <h3>Calculate how much you could save</h3>'+ 
    '      <a class="MKqtX MkqK9  kmiMA _-4XsU XETFi" href="https://www.athena.com.au/calculators/refinancing" style="display: block;">Calculate Now'+ 
    '  </a>'+ 
    '  </div>';

    function init() {
      document.querySelector("#skip-to-content-link-target > section:nth-child(1) > div > div > div.ProductPageBanner_image-container-desktop__1UF3i").innerHTML = `<iframe width="620" height="345" src="https://www.youtube.com/embed/_Ww7w6irPD4">
      </iframe>`;

      document.querySelector("#skip-to-content-link-target > div.ContentfulContent_content__GOW9Y > div.ContentfulMediaComponent_root__1Gp_U.ContentfulMediaComponent_dark__3YFAu").innerHTML = htmlString

    }

    waitForElement("#skip-to-content-link-target > section:nth-child(1) > div > div", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
