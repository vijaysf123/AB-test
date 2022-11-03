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

    function waitForTrust(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.Trustpilot && window.Trustpilot.loadFromElement) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    /* Variation functions */

    var egString =
      "" +
      '  <section class="eg_article">' +
      "  " +
      '      <div class="eg_hero_left">' +
      "          <h1>Refinance savings <br> calculator</h1>" +
      "          <p>Compare your current loan with that we can offer. You’ll be blown away at how much time and money you’ll save by switching to Athena and paying your home loan off faster.</p>" +
      "      </div>" +
      "  " +
      '      <div class="eg_hero_right">' +
      '          <div class="eg_inner">' +
      '              <svg width="420" height="196" viewBox="0 0 386 196" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '                      <g filter="url(#filter0_d_1153_95)">' +
      '                      <path d="M361.17 182.653L375.841 10.8189L10.9648 7.08854L16.3212 178.866L361.17 182.653Z" fill="#DE026A"/>' +
      '                      <path d="M361.17 182.653L375.841 10.8189L10.9648 7.08854L16.3212 178.866L361.17 182.653Z" fill="url(#paint0_linear_1153_95)" fill-opacity="0.2"/>' +
      "                      </g>" +
      "                      <defs>" +
      '                      <filter id="filter0_d_1153_95" x="0.964844" y="0.0885315" width="384.876" height="195.565" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>' +
      '                      <feOffset dy="3"/>' +
      '                      <feGaussianBlur stdDeviation="5"/>' +
      '                      <feComposite in2="hardAlpha" operator="out"/>' +
      '                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>' +
      '                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1153_95"/>' +
      '                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1153_95" result="shape"/>' +
      "                      </filter>" +
      '                      <linearGradient id="paint0_linear_1153_95" x1="276.87" y1="6.79436" x2="84.7947" y2="17.0847" gradientUnits="userSpaceOnUse">' +
      '                      <stop stop-color="white"/>' +
      '                      <stop offset="1" stop-color="#DE026A"/>' +
      "                      </linearGradient>" +
      "                      </defs>" +
      "                      </svg>" +
      "  " +
      '              <div class="eg_banner_img_content">' +
      "                  <p>fee-free low rates from</p>" +
      "                  <h2>3.79" +
      '                      <div class="eg_sym">' +
      "                          <p> <span>%</span> <br> P.A. </p </div>" +
      "                  </h2>" +
      "                  </div>" +
      "  " +
      '                  <svg class="eg_img" width="385" height="94" viewBox="0 0 385 94" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '                      <g filter="url(#filter0_d_1153_96)">' +
      '                      <path d="M20.2203 80.1962L10 17.8189L374.59 7.03803L364.805 69.9116L20.2203 80.1962Z" fill="#9411BC"/>' +
      '                      <path d="M20.2203 80.1962L10 17.8189L374.59 7.03803L364.805 69.9116L20.2203 80.1962Z" fill="url(#paint0_linear_1153_96)" fill-opacity="0.2"/>' +
      "                      </g>" +
      "                      <defs>" +
      '                      <filter id="filter0_d_1153_96" x="0" y="0.0380249" width="384.59" height="93.1582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>' +
      '                      <feOffset dy="3"/>' +
      '                      <feGaussianBlur stdDeviation="5"/>' +
      '                      <feComposite in2="hardAlpha" operator="out"/>' +
      '                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>' +
      '                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1153_96"/>' +
      '                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1153_96" result="shape"/>' +
      "                      </filter>" +
      '                      <linearGradient id="paint0_linear_1153_96" x1="145.125" y1="31.0331" x2="351.697" y2="57.579" gradientUnits="userSpaceOnUse">' +
      '                      <stop stop-color="white"/>' +
      '                      <stop offset="1" stop-color="#9411BC"/>' +
      "                      </linearGradient>" +
      "                      </defs>" +
      "                      </svg>" +
      '                  <p class="eg_img_content">Variable & comparison^</p>' +
      "              </div>" +
      "  " +
      "              <!-- /***************/ -->" +
      '              <div class="eg_wrapper">' +
      "  " +
      '  <div class="trustpilot-widget" data-locale="en-AU" data-template-id="539ad0ffdec7e10e686debd7" data-businessunit-id="5c08b592390696000193c25d" data-style-height="350px" data-style-width="100%" data-theme="light" data-stars="4,5" data-font-family="Lato"' +
      '      data-text-color="##fff">' +
      '      <a href="Athena Home Loans is rated " Excellent " with 4.7 / 5 on Trustpilot" target="_blank" rel="noopener">Trustpilot</a>' +
      "  </div>" +
      "  " +
      "              </div>" +
      "  " +
      "          </div>" +
      "  " +
      "  " +
      "  </section>";

    function init() {
      document
        .querySelector(
          "#skip-to-content-link-target > div.PageHeading_root__33XZK"
        )
        .insertAdjacentHTML("afterend", egString);

      waitForTrust(
        function () {
          let trustpilotbox = document.querySelector(".trustpilot-widget");
          window.Trustpilot.loadFromElement(trustpilotbox);
        },
        50,
        5000
      );
    }

    function loadScript() {
      var trustScript = document.createElement("script");

      trustScript.setAttribute(
        "src",
        "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      );

      trustScript.async = true;
      document.head.appendChild(trustScript);
    }

    /* Initialize variation */
    loadScript();

    waitForElement(
      "#skip-to-content-link-target > div.PageHeading_root__33XZK",
      init,
      50,
      15000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
