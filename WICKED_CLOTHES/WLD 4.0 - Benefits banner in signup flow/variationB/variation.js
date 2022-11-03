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


    var egTrust = `
    <div class="eg_trust">
    <div class="eg_protection">

        <div class="eg_svg_1">
            <img src="https://cfactory-img.s3.amazonaws.com/WLD/4.0/icon3.svg" alt="icon_1" />
        </div>

        <p>24 hour protection</p>
    </div>

    <div class="eg_ingrad">

        <div class="eg_svg_2">
            <img src="https://cfactory-img.s3.amazonaws.com/WLD/4.0/icon2.svg" alt="icon_2"/>
        </div>

        <p>Natural ingredients</p>
    </div>

    <div class="eg_plastic">
        <div class="svg_3">
            <img src="https://cfactory-img.s3.amazonaws.com/WLD/4.0/icon1.svg" alt="icon_3" />
        </div>
        <p>Plastic-free refills</p>
    </div>

</div>
`
 
function init(){
  document.querySelector("#__layout > div > main").insertAdjacentHTML("beforebegin", egTrust)

}
    /* Initialize variation */
    waitForElement("#__layout  main", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

