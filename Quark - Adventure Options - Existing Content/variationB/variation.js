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

    /* Variation functions**/


    var eg_str =''+ 
'  <section class="eg_main_section">'+ 
'      <div class="eg_popular">'+ 
'      </div>'+ 
'  </section>';


var eg_str_2 =''+ 
'  <section class="eg_article">'+ 
'      <li class="eg_list" data-id="336681999" data-source-stream-id="498639" data-tags="[Region] Arctic,Polar Pursuits,[Region] Greenland,Wildlife,[Region] North Pole,[Region] Northwest Passage" class="tile single blogpost stream-498639 with-img rev animated fadeInUp retiled">'+ 
'          <div class="img visible" id="tileImagePreview336681999">'+ 
'              <a href="https://explore.quarkexpeditions.com/blog/top-10-reasons-to-visit-the-arctic-3">'+ 
'                  <img src="https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fs3.amazonaws.com%2Fqblog%2Flib%2FDanny_KK_%2F20121221-IMG_0035.jpg%23keepProtocol&size=1&version=1581875787&sig=5296c911490ed9da3238ecf65a47a5d7&default=hubs%2Ftilebg-blogs.jpg" alt=""'+ 
'                      srcset="">'+ 
'              </a>'+ 
'          </div>'+ 
'  '+ 
'          <div class="description">'+ 
'              <h3 class="h3like  ">Top 10 Reasons to Visit the Arctic</h3>'+ 
'  '+ 
'          </div>'+ 
'          <a class="item-link view hooked" href="https://explore.quarkexpeditions.com/blog/top-10-reasons-to-visit-the-arctic-3" data-page-title="Top 10 Reasons to Visit the Arctic" data-seo-title="Top 10 Reasons to Visit the Arctic" data-internal="blogpost">'+ 
'          Read Article <img class="eg_arrow" src="https://editor-assets.abtasty.com/46831/6321b3c32b12a1663153091.png"></a>'+ 
'  '+ 
'          <a class="item-link hooked" href="https://explore.quarkexpeditions.com/blog/top-10-reasons-to-visit-the-arctic-3" data-internal="blogpost" data-seo-title="Top 10 Reasons to Visit the Arctic" data-page-title="Top 10 Reasons to Visit the Arctic"></a>'+ 
'      </li>'+ 
'  '+ 
'  '+ 
'      <li class="eg_list" data-id="336682644" data-source-stream-id="498639" data-tags="[Region] Antarctic,Polar Pursuits,[Region] Arctic" class="tile single blogpost stream-498639 with-img rev animated fadeInUp retiled">'+ 
'          <div class="img visible" id="tileImagePreview336682644">'+ 
'              <a href="https://explore.quarkexpeditions.com/blog/top-7-most-brag-worthy-polar-experiences">'+ 
'                  <img src="https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fs3.amazonaws.com%2Fqblog%2Flib%2FNansen_Photo_Equipment.jpg%23keepProtocol&size=1&version=1581875787&sig=d562dce41ed850456c1e020d1807faea&default=hubs%2Ftilebg-blogs.jpg" alt="" srcset="">'+ 
'              </a>'+ 
'          </div>'+ 
'          <div class="description">'+ 
'              <h3 class="h3like  ">Top 7 Most Brag-worthy Polar Experiences</h3>'+ 
'  '+ 
'          </div>'+ 
'          <a class="item-link view hooked" href="https://explore.quarkexpeditions.com/blog/top-7-most-brag-worthy-polar-experiences" data-page-title="Top 7 Most Brag-worthy Polar Experiences" data-seo-title="" data-internal="blogpost">'+ 
'          Read Article <img class="eg_arrow" src="https://editor-assets.abtasty.com/46831/6321b3c32b12a1663153091.png"> </a>'+ 
'          <a class="item-link hooked" href="https://explore.quarkexpeditions.com/blog/top-7-most-brag-worthy-polar-experiences" data-internal="blogpost" data-seo-title="" data-page-title="Top 7 Most Brag-worthy Polar Experiences"></a>'+ 
'      </li>'+ 
'  '+ 
'  '+ 
'      <li class="eg_list" data-id="336682917" data-source-stream-id="498639" data-tags="Polar Pursuits,Wildlife,Expedition Tales,[Polar Pursuits] Photography,[Region] Arctic,[Expedition Tales] Special Guests" class="tile single blogpost stream-498639 with-img rev animated fadeInUp retiled">'+ 
'          <div class="img visible" id="tileImagePreview336682917">'+ 
'              <a href="https://explore.quarkexpeditions.com/blog/polar-wildlife-photography-tips-from-an-arctic-expert">'+ 
'                  <img src="https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fcontent.cdntwrk.com%2Ffiles%2FaHViPTQyMTA5JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVhNzIwOWEzNTYwZGEuanBnJnZlcnNpb249MDAwMCZzaWc9MGRhNDczNGQ4MTg5NzM4NjM5Yjc2YjRhOTFlZmY0NmM%25253D&size=1&version=1581875787&sig=d4b162908a021003b5b1f5aafa8326ad&default=hubs%2Ftilebg-blogs.jpg"'+ 
'                      alt="" srcset="">'+ 
'              </a>'+ 
'          </div>'+ 
'          <div class="description">'+ 
'              <h3 class="h3like  ">Polar Wildlife Photography Tips from an Arctic Expert</h3>'+ 
'  '+ 
'          </div>'+ 
'          <a class="item-link view hooked" href="https://explore.quarkexpeditions.com/blog/polar-wildlife-photography-tips-from-an-arctic-expert" data-page-title="Polar Wildlife Photography Tips from an Arctic Expert" data-seo-title="" data-internal="blogpost">'+ 
'          Read Article <img class="eg_arrow" src="https://editor-assets.abtasty.com/46831/6321b3c32b12a1663153091.png"> </a>'+ 
'          <img src="../Images/right-arrow-svgrepo-com.svg" alt="" srcset="">'+ 
'          <a class="item-link hooked" href="https://explore.quarkexpeditions.com/blog/polar-wildlife-photography-tips-from-an-arctic-expert" data-internal="blogpost" data-seo-title="" data-page-title="Polar Wildlife Photography Tips from an Arctic Expert"></a>'+ 
'      </li>'+ 
'  '+ 
'  '+ 
'      <li class="eg_list" data-id="336682359" data-source-stream-id="498639" data-tags="[Region] Arctic Watch,[Region] Antarctic,Polar Pursuits,[Region] Greenland,[Region] Arctic,Travel Styles" class="tile single blogpost stream-498639 with-img rev animated fadeInUp retiled">'+ 
'          <div class="img visible" id="tileImagePreview336682359">'+ 
'              <a href="https://explore.quarkexpeditions.com/blog/top-5-expeditions-for-adventure-travel-lovers">'+ 
'                  <img src="https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fs3.amazonaws.com%2Fqblog%2Flib%2Fblog_bragworthy_bear.jpg%23keepProtocol&size=1&version=1581875787&sig=dbf96d4b09fe5080905f049a29bb2c56&default=hubs%2Ftilebg-blogs.jpg" alt="" srcset="">'+ 
'              </a>'+ 
'  '+ 
'          </div>'+ 
'          <div class="description">'+ 
'              <h3 class="h3like">Top 5 Expeditions for Adventure Travel Lovers</h3>'+ 
'  '+ 
'          </div>'+ 
'          <a class="item-link view hooked" href="https://explore.quarkexpeditions.com/blog/top-5-expeditions-for-adventure-travel-lovers" data-page-title="Top 5 Expeditions for Adventure Travel Lovers" data-seo-title="" data-internal="blogpost">'+ 
'          Read Article <img class="eg_arrow" src="https://editor-assets.abtasty.com/46831/6321b3c32b12a1663153091.png"> </a>'+ 
'          <a class="item-link hooked" href="https://explore.quarkexpeditions.com/blog/top-5-expeditions-for-adventure-travel-lovers" data-internal="blogpost" data-seo-title="" data-page-title="Top 5 Expeditions for Adventure Travel Lovers"></a>'+ 
'      </li>'+ 
'  </section>';
  
  var htmlString =''+ 
  '  <h2 class="eg_title">More Articles</h2>';

  var eg_polar =''+ 
  '  <div class="eg_wrapper">'+ 
  '      <div class="eg_hero_right">'+ 
  '          <h2>Make Your Polar Dream a Reality</h2>'+ 
  '          <p>All we need is a little bit of information about your travel preferences and one of our Polar Travel Advisor will be in touch.</p>'+ 
  '          <a href="#">GET A QUOTE</a>'+ 
  '      </div>'+ 
  '  '+ 
  '      <div class="eg_hero_left">'+ 
  '          <div class="eg_img">'+ 
  '              <img src="https://content.cdntwrk.com/files/aHViPTQyMTA5JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzYwODFjZmJhYTM0ZWIuanBnJnZlcnNpb249MDAwMCZzaWc9MjUxMjIxNzIyZTllYzY0YThmZDM5YzgxMTg5ZTM1ZTM%253D">'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';

    function init() {
      let footer = document.querySelector(
        "body > div.dialog-off-canvas-main-canvas > div > footer"
      );

      footer.insertAdjacentHTML("beforebegin", eg_str);
      footer.insertAdjacentHTML("beforebegin", eg_str_2);
      footer.insertAdjacentHTML("beforebegin", eg_polar);
      document.querySelector("section.eg_article").insertAdjacentHTML("beforebegin" , htmlString)

      getPopuler();
    }
    
    function getPopuler(){
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var newEle = document.createElement('div');
            newEle.innerHTML = this.responseText;
            var populerEle = newEle.querySelector('.component--testimonial');
            var populerEleNew = populerEle.previousElementSibling;
           var inr =  populerEleNew.querySelector('.container-fluid').innerHTML;
           addPopularSection(inr);
          }
        };
        xhttp.open("GET", "https://www.quarkexpeditions.com/antarctic", true);
        xhttp.send();
    }
    function addPopularSection(inr){
      // var eg_str =''+ 
      // '  <section class="eg_main_section">'+ 
      // '      <div class="eg_popular">'+ inr+
      // '</div></div>';
      document.querySelector('.eg_main_section .eg_popular').innerHTML = inr;

    }
    /* Initialize variation */
    waitForElement("#block-qrk-theme-content > article", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

