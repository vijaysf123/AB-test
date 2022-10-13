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
   
function init(){
  document.querySelector("#level-2-1 > li.mm-first > a").addEventListener("click", ()=>{
    window.location.href = "https://www.quarkexpeditions.com/arctic/canadian-high-arctic"
    })

    document.querySelector("#level-2-1 > li:nth-child(3) > a").addEventListener("click", ()=>{
      window.location.href = "https://www.quarkexpeditions.com/arctic/greenland"
      })

      document.querySelector("#level-2-1 > li:nth-child(4) > a").addEventListener("click", ()=>{
        window.location.href = "https://www.quarkexpeditions.com/arctic/the-north-pole"
        })

        document.querySelector("#level-2-1 > li:nth-child(5) > a").addEventListener("click", ()=>{
          window.location.href = "https://www.quarkexpeditions.com/arctic/russian-high-arctic"
          })

          document.querySelector("#level-2-1 > li:nth-child(6) > a").addEventListener("click", ()=>{
            window.location.href = "https://www.quarkexpeditions.com/arctic/svalbard"
            })
}
    /* Initialize variation */
    waitForElement("body > div > div > nav.navbar", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

