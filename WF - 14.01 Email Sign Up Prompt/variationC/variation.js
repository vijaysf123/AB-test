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
 function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }
    var eg_newsletter ='<p class="eg-mail">'+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 507.9 507.9" style="enable-background:new 0 0 507.9 507.9;" xml:space="preserve">'+ 
    '  <g>'+ 
    '  	<g>'+ 
    '  		<path d="M465.7,84.45H42.3c-23.3,0-42.3,19-42.3,42.4v254.3c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-254.3    C508,103.45,489,84.45,465.7,84.45z M454.3,112.75l-200.4,169.1L53.7,112.75H454.3z M28.2,377.75v-249.6L177,253.75L28.2,377.75z     M51.4,395.15l147.5-122.9l45.9,38.8c2.6,2.2,5.9,3.3,9.1,3.3s6.5-1.1,9.1-3.3l46-38.8l147.7,122.9H51.4z M479.8,377.65    l-148.9-123.9l148.9-125.7V377.65z"/>'+ 
    '  	</g>'+ 
    '  </g>'+ 
    '  </svg></p>';

    /* Variation functions */

    var eg_section =''+ 
'  <section class="eg_collection">'+ 
'      <div class="container">'+ 
'          <div class="row">'+ 
'              <article class="c-50-50-full-width-promo component-full bg-dark-grey">'+ 
'                  <div class="image-wrapper">'+ 
'                      <div class="c-image">'+ 
'                          <figure>'+ 
'                              <picture>'+ 
'                                  <img src="https://www.waterford.com/-/media/Waterford/Nav%20promo%20tiles%20TEST/Test%201401%20Desktop" border="0">'+ 
'                              </picture>'+ 
'                          </figure>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="text-box">'+ 
'                      <div class="eg_offer">Get 10% off our marquis <br> collection</div>'+ 
'                      <div class="eg_textBox_container">'+ 
'                          <div class="content-wrapper">'+ 
'                              <p class="text ">'+ 
'                                  Register today for new product alerts, exclusive offers, and 10% off our marquis collection* on your first order'+ 
'                              </p>'+ 
'                          </div>'+ 
'                          <div class="eg_inner">'+ 
'                              <span class="eg_icon">' + eg_newsletter + '</span>'+ 
'                              <button type="button" class="c-btn primary" data-toggle="modal" data-target="#newsletterForm" id="showNewsletterModal">'+ 
'  Sign up to our newsletter</button>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'          </div>'+ 
'  </section>';

    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector('.layout-section.bg-light-white').insertAdjacentHTML('beforebegin',eg_section);
      // document.querySelector('.c-header-toolbar').insertAdjacentHTML('afterbegin',eg_newsletter);

      live('.c-header-toolbar p.eg-mail','click',function(){
        document.querySelector('.c-footer-header .c-newsletter-trigger button.c-btn').click();
      })
   
    }

    /* Initialize variation */
    waitForElement('.layout-section.bg-light-white', init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
