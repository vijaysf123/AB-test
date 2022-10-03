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
    var eg_String =   `
    <div id="eg_popup_container" class="eg_popup_container">
    <section class="eg_popup">
    <div class="eg_wrapper">
     <span class="eg_close">&times;</span>
     <div class="eg_top">
         Bob le Menuisier <br> se bat au quotidien  <br> pour votre pouvoir  <br> d'achat.
       </div>

       <div class="eg_para">
         Obtenez des remises <br> supplémentaires en <br> appelant le :
       </div> 

    </div>

    <a href="tel:0805542084" class="eg_number"> <img class="eg_img" src="https://expogrowth.in/wp-content/uploads/2022/10/5.svg"> 0 805 542 084</a>

       <div class="eg_footer">
         Service &amp; appel gratuit.
       </div>

       <div class="eg_final">
          <div class="eg_icon">
            <img class="eg_img" src="https://expogrowth.in/wp-content/uploads/2022/10/4.svg">
            <p>Solutions de <br> paiement</p>
            </div>
          
          <div class="eg_icon">
            <img class="eg_img" src="https://expogrowth.in/wp-content/uploads/2022/10/3.svg">
            <p>Livraison <br> à domicile</p>
            </div>
          
          <div class="eg_icon">
            <img class="eg_img" src="https://expogrowth.in/wp-content/uploads/2022/10/2.svg">
            <p>Service <br> client</p>
          </div>
          
          <div class="eg_icon">
            <img class="eg_img" src="https://expogrowth.in/wp-content/uploads/2022/10/1.svg">
            <p>Menuiseries <br> sur-mesure</p>
           </div>
          
          
       </div>
</section>
</div>
`

function init(){
  document.querySelector('body').insertAdjacentHTML('afterbegin',eg_String);


  const close = document.querySelector(".eg_close")
  const popup = document.querySelector(".eg_popup");
  const main_popup = document.querySelector(".eg_popup_container")
  

  close.addEventListener("click", function() {
    popup.style.display = "none";
    main_popup.style.display = "none";
  });
}
    /* Initialize variation */
    waitForElement("body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

