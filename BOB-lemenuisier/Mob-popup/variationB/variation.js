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

   var popup = ` <div class="eg-modal-popup">
   <div class="backgrop-background"></div>
<div class="eg-modal-content">
   <div class="modal-img">
       <img src="https://expogrowth.in/wp-content/uploads/2022/09/popup.png" class="img-fluid">
   </div>
   <div class="close-btn"><span class="cross"> ×</span></div>
</div>
</div>`;

    function init() {
    document.querySelector('body footer').insertAdjacentHTML('afterend',popup);
    document.querySelector('.eg-modal-popup span.cross').addEventListener('click',function(){
      document.querySelector('.eg-modal-popup').style.display= "none";
    });
    document.querySelector('.eg-modal-popup').addEventListener('click',function(){
      window.open('tel:+33805542084','_self');
    }); 
    }

    waitForElement("body footer", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
