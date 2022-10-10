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

    var eg_logos = `
    <div class="eg_logo_content">

    <div class="eg_one">
         <img class="egImg img1" src="https://expogrowth.in/wp-content/uploads/2022/10/FleetOwner.png" >
         <img class="egImg img2" src="https://expogrowth.in/wp-content/uploads/2022/10/g2.png" >
      </div>

      <div class="eg_two">
         <img class="egImg img3" src="https://expogrowth.in/wp-content/uploads/2022/10/aitechpark.png" alt="" srcset="">
         <img class="egImg img4" src="https://expogrowth.in/wp-content/uploads/2022/10/FleetEquipment.png" alt="" srcset="">
      </div>

      <div class="eg_three">
       <img class="egImg img5" src="https://expogrowth.in/wp-content/uploads/2022/10/thetrucker.png" alt="" srcset="">
       <img class="egImg img6" src="https://expogrowth.in/wp-content/uploads/2022/10/WasteAdvantageMag.png" alt="" srcset="">
      </div>
 
      <div class="eg_fourth">
         <img class="egImg img7" src="https://expogrowth.in/wp-content/uploads/2022/10/CCJ.png" alt="" srcset="">
         <img class="egImg img8" src="https://expogrowth.in/wp-content/uploads/2022/10/FeaturedCustomers.png" alt="" srcset="">
      </div>
   </div>`;

    function init() {
      document.querySelector("#hero-edit > div:nth-child(3)").insertAdjacentHTML("afterend",eg_logos)
      document.querySelector("#hero-edit > div.eg_logo_content").insertAdjacentHTML("beforebegin", "<h2 class='eg_head'>Featured In<h2>")

    }
    /* Initialize variation */
    waitForElement("#hero-edit", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
