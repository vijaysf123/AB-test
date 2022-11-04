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
    var htmlString = `<div class="eg_collections">

    <h2>Collections</h2>

    <div class="eg_main">
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/commemorative-events">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F176724148278%2F1605802306427%2F611855-PoppyShopWebsiteAssets-Shot33-RAFPins-Desktop1980x810.jpg%3Fv%3D1623849686447&c_options=w_1500" alt="Commemorative_Events">
            </div>
            <h3>Commemorative Events</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/pages/veterans-market">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/79778021430/1636626297130/202108_VETERAN-JEWELLERY_RBL8038.jpg?v=0&options=w_1500" alt="veteran">
            </div>
            <h3>Veteran's Market</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/membership">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F169159032886%2F1590760983831%2F611855-PoppyShopWebsiteAssets-Shot23-Membership-Desktop1980x810.jpg%3Fv%3D1623850704516&c_options=w_1500" alt="Membership">
            </div>
            <h3>Membership</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/armed-forces">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/169158049846/1590758159718/RBL005_Spring_Shot-18_-Commemorative-Shot-1_0384.jpg?v=1654766277411&options=w_1500" alt="Armed_Forces">
            </div>
            <h3>Armed Forces</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/legion-100-years">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F260894654518%2F1619789009590%2FTRBL-Banners-Silk-Replica-Poppy-1980x810.jpg%3Fv%3D1623855953233&c_options=w_1500" alt="RBL_Collection">
            </div>
            <h3>RBL Collection</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/military-metals">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/173949452342/1601498132204/REM22_Shot10_L_Military-Metals-1.jpg?v=1665399898795&options=w_1500" alt="Commemorative_Events">
            </div>
            <h3>Military Metals</h3>
        </div>
    </div>
</div>`;

function init(){

    document.querySelector("#shopify-section-1583400657542").insertAdjacentHTML('afterend',htmlString)
  document.querySelectorAll('.eg_collections .eg_innr').forEach(function(el){
el.addEventListener('click',function(){
  window.location.href = this.getAttribute('eg-href');
});
  });
}
    /* Initialize variation */
    waitForElement("#shopify-section-1583400657542", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

