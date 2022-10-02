(function () {
    try {
        /* main variables */
        var debug=0;
        var variation_name="";

        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval=setInterval(function () {
                    if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                        clearInterval(interval);
                        trigger();
                    }
                }

                , delayInterval);

            setTimeout(function () {
                    clearInterval(interval);
                }

                , delayTimeout);
        }

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(
                                    selector
                                ),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
    
var SideCartpopup=`<div id="eg-side-cart-popup" class="eg-side-cart-overlay"></div>
<div class="eg-side-cart-popup">
    <a class="eg-side-cart-close" ><span class="icon icon-close" role="img"></span></a>
    <p class="eg-side-cart-popup-title"><span class="eg-icon"><span class="indicator-icon">
    <span class="icon icon-check"></span>
  </span></span> Product added to cart</p>
    <p class="eg-shipping-msg"><span aria-hidden="true" class="icon icon-information-circle"></span> Add 40$ worth of products to get free shipping.</p>
    <hr></hr>
    <div class="eg-side-cart-content">
      <div class="eg-product-image"><img  alt=""></div>
      <div class="eg-product-details"><p class="eg-product-name"></p><div class="eg-product-qty"> <p class="eg-qty-text">Quantity</p><p class="eg-qty-value">1</p></div></div>
      <div class="eg-product-price"><p class="eg-price"><p></div>    
    </div>
    <a class="eg-side-cart-atc" href="/cart">View Cart</a>
    <a class="eg-side-cart-checkout" href="/cart">Checkout</a>
</div>`;

        function init() {
            document.querySelector("body").insertAdjacentHTML("beforeend", SideCartpopup);
            
            setTimeout(() => {
                document.body.classList.add("eg-animation");
            }, 1000);
  
            live('.add-to-cart-btn, button[title="Add to Cart"], .c-c-product-card_btn-container button[title="Add to cart"]', 'click', event => {

                  waitForElement('.c-action-indicator.success.show', checkShip, 50, 20000);
                 
                 });
                 live('.eg-side-cart-close, .eg-side-cart-overlay', 'click', event => {
                   if( document.body.classList.contains("eg-popup-open")){
                    document.body.classList.remove("eg-popup-open");
                    document.body.classList.add("eg-popup-close")
                    }
                 })
        }   


function checkShip(){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var shipMsg = data.result.summary.potentialPromotions[0];
        if(shipMsg.indexOf('Free Delivery')!= -1){
        document.querySelector('.eg-shipping-msg').textContent=shipMsg;
        }
        else{
          document.querySelector('.eg-shipping-msg').textContent="Your order qualifies for FREE SHIPPING!";
        }
        initCheck1(data);
      }
    };
    xhttp.open("GET", "https://www.waterford.com/en-GB/api/sitecore/ShoppingCartApi/MiniCart", true);
    xhttp.send();

}
function initCheck1(data){
  var  popData = data.result.cart.items;
  var length = (popData.length)-1;
  var productData  = popData[length];
  document.querySelector(".eg-product-name").innerText = productData.name;
  var qty = productData.quantity.current;
  var price = productData.price;
  var img = productData.image.sm2x;
 document.querySelector(".eg-price").innerText = price;
 document.querySelector(".eg-product-image img").setAttribute("src", img);
 document.querySelector('.eg-product-qty').textContent = qty;
      if( document.body.classList.contains("eg-popup-close")){
          document.body.classList.remove("eg-popup-close")
          }
        document.body.classList.add("eg-popup-open") 
              setTimeout(() => {
                  document.querySelector(".eg-side-cart-overlay").click();
              }, 3500); 
}
        waitForElement('.add-to-cart-btn, button[title="Add to Cart"], .c-c-product-card_btn-container button[title="Add to cart"]', init, 50, 20000);
    }
    

    catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();

