(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    var eg_overlay = ''+
    '<div class="eg_overlay">'+
    '      <div class="eg_header">'+
    '           <div class="eg_logo"><a href="/"><img class="mt-3" src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/logo-green.svg"></a></div>'+
    '      </div>'+
    '      <div class="eg_body">'+
    '            <div class="eg_hero">'+
    '                  <img src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/header-team-lk.svg">'+
    '            </div>'+
    '            <div class="eg_content">'+
    '                  <h3>When <span>learning is fun</span>, kids love to learn!</h3>'+
    '                  <p>Lingokids is the Playlearning<sup>TM</sup> app<br> for kids 2-8 years old</p>'+
    '                  <div class="eg_slider">'+
    '                        <div><img src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/50m-families.svg"></div>'+
    '                        <div><img src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/first-app.svg"></div>'+
    '                        <div><img src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/store-reviews.svg"></div>'+
    '                        <div><img class="eg_awards" src="https://lingokids-api-assets-us-west-2-production.s3.us-west-2.amazonaws.com/web/images/ksa22-badge.png"></div>'+
    '                  </div>'+
    '                  <div class="eg_btn--wrapper"><button class="eg_button">Get started</button></div>'+
    '            </div>'+
    '      </div>'+
    '      <div class="eg_footer">'+
    '           <div class="items-center text-center mt-2 ml-1 mr-1">'+ 
    '               <small><a class="text-blueberry-600 mr-2" href="https://lingokids.com/terms-of-service">Terms of service</a></small>'+ 
    '               <small class="text-gray-600 mr-2">|</small>'+ 
    '               <small><a class="text-blueberry-600 mr-2" href="https://lingokids.com/privacy-policy">Privacy Policy</a></small>'+ 
    '               <small class="text-gray-600 mr-2">|</small>'+ 
    '               <small><a class="text-blueberry" href="https://lingokids.com/cookie-notice">Cookies</a></small>'+ 
    '           </div>'+ 
    '           <div class=" text-night-700">'+ 
    '               <small>© 2022 Monkimun, Inc.</small>'+ 
    '           </div>'+ 
    '      </div>'+
    '</div>';
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector('body').classList.add('eg_show')
      document.querySelector('body').insertAdjacentHTML('afterend',eg_overlay);

      var getLang = document.querySelector('[data-controller="locale-selector"]').parentElement.innerHTML;
      document.querySelector('.eg_header').insertAdjacentHTML('beforeend',getLang);

      waitForjQuery(function(){
        addSlickScript();
        waitForSlick(function(){
          var $ = window.jQuery; 
          $('.eg_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          });
        },50,15000)
      },50,15000)

      document.querySelector('.eg_overlay .eg_content button').addEventListener('click',function(){
        document.querySelector('.eg_overlay').remove();
        document.querySelector('body').classList.remove('eg_show')
      })
      

    }

    function addSlickScript() {
      var linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.type = "text/css";
      linkEl.href =
        "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css";
      document.head.insertAdjacentElement("beforeend", linkEl);
      var scriptEl = document.createElement("script");
      scriptEl.src =
        "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js";
      document.head.insertAdjacentElement("beforeend", scriptEl);
    }

    function waitForjQuery(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery != undefined) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    function waitForSlick(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    /* Initialize variation */
    waitForElement('body [data-controller="locale-selector"]', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


