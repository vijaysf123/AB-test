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
 
    var eg_str = `
      <div class="eg_btm">
          <a href="#" class="eg_quote"> Get a quote</a>
          <a href="#" class="eg_learn"> Learn more</a>
      </div>
    `;

function init(){
 
    let items = document.querySelectorAll('div.css-gw8ne9');

    items.forEach(function(item){
      item.insertAdjacentHTML('afterend',eg_str);
    });
    document.querySelector("section:nth-child(6) div:nth-child(3) div.eg_btm > a.eg_quote").innerText  = "Book now";
    document.querySelector("section:nth-child(6) div:nth-child(4) div.eg_btm > a.eg_quote").innerText  = "Buy now";
  
  let egIndex = 0;
  let linksBox = document.querySelectorAll(".eg_btm");
  let egObj = [
      {
        link1:"https://www.regus.com/en-us/enquiry",
        link2:"https://www.regus.com/en-us/office-space/private-offices"
      },
      {
        link1:"https://www.regus.com/en-us/enquiry",
        link2:"https://www.regus.com/en-us/office-space/custom-office"
      },
      {
        link1:"https://www.regus.com/booking/#/meeting-room/search?paginationSize=100&searchRangeInMilesTo=2&locale=en-US&countryCode=US&location=&countryName=United%20States&centreNumber=",
        link2:"https://www.regus.com/en-us/office-space/day-office"
      },
      {
        link1:"https://www.regus.com/en-us/membership/office-checkout-page/#/en-us/membership/membership-checkout-page/plan-options",
        link2:"https://www.regus.com/en-us/membership"
      }
    ];

    egObj.forEach(boxlinks=>{
        linksBox[egIndex].children[0].href = boxlinks.link1;
        linksBox[egIndex].children[1].href = boxlinks.link2;
        egIndex += 1;
    });

}


    /* Initialize variation */
    waitForElement("section:nth-child(6) > div > div", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
