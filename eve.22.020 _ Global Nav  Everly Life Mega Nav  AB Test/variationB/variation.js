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
   
    var htmlString =''+ 
    '  <div class="eg_container">'+ 
    '      <div class="eg_first">'+ 
    '          <a class="" href="/overview"><img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png" /> Overview</a>'+ 
    '          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>'+ 
    '      </div>'+ 
    '  '+ 
    '      <div class="eg_inner">'+ 
    '          <div class="eg_first">'+ 
    '              <a class="" href="/protection"><img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png" /> Protection</a>'+ 
    '              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>'+ 
    '          </div>'+ 
    '  '+ 
    '          <div class="eg_first">'+ 
    '              <a class="" href="/growth"><img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png" />Growth</a>'+ 
    '              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  '+ 
    '  </div>';
   

    function init() {

      document.querySelector("#__next > header  nav  div:nth-child(1) > ul").innerHTML = htmlString; 
      
    }
    /* Initialize variation */
    waitForElement("#__next nav ul", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();








// document.querySelector("#__next nav  div.sc-5e3135eb-2.bohicy.navOpen > div:nth-child(1) > ul").insertAdjacentHTML("beforeend", `
// <li class="eg-nav-item">
//     <div class="eg-icon">
//     <img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png"/>
//     </div>

//     <div>
//         <a href="https://www.everlylife.com/protection">Overview</a>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//     </div>
// </li>

// <li class="eg-nav-item">
//     <div class="eg-icon">
//     <img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png"/>
//     </div>

//     <div>
//         <a href="https://www.everlylife.com/protection">Protection</a>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//     </div>
// </li>

// <li class="eg-nav-item">
//     <div class="eg-icon">
//     <img class="eg_img" src="https://img.icons8.com/color/48/000000/positive-dynamic.png"/>
//     </div>
//     <div>
//         <a href="https://www.everlylife.com/growth">Growth</a>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//     </div>
// </li>
// `);
