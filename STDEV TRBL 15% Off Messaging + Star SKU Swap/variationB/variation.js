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

    var egString =
      "" +
      '  <div class="eg_wrapper">' +
      "  " +
      '      <div class="eg_icon">' +
      '          <svg width="80px" height="80px" viewBox="0 0 123 126" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">' +
      '      <clipPath id="_clip1">' +
      '          <rect id="Background" x="0" y="0" width="123" height="126"></rect>' +
      "      </clipPath>" +
      '      <g clip-path="url(#_clip1)">' +
      '          <clipPath id="_clip2">' +
      '              <rect x="0" y="0" width="123" height="126"></rect>' +
      "          </clipPath>" +
      '          <g clip-path="url(#_clip2)">' +
      '              <use xlink:href="#_Image3" x="0" y="0" width="123px" height="126px"></use>' +
      "          </g>" +
      "      </g>" +
      "      <defs>" +
      '          <image id="_Image3" width="123px" height="126px" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAB+AHsDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6Tr0zygoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPlrwJpHijxg+pS6d4ru7fW7NxKLeaeRDKCTlg4PBB4xjuORX1WJq0cPyqULxZ85h6dWvdxn7yOv0b4peK/CF+uj/EDSJ5VHAuAgWXHqCPkkHuCPqa46mXUcRHnw8v6/NHVDHVaD5K6/r9TH1f4meONW8Q6pqvhid/7H03955IhUr5O7aGcEbjnqfTnpjNbU8Bh6dOMKq95/mZTxtec5Sp/CvyPXPBXxB0bXvBsviC6nisvsa/6fGxz5Leo7kHt69OteRiMFUpVvZrW+x6dDFwqUud6W3NDwf428N+LDKmi6gJZouXhdCjgf3sHqPcVnXwlWh8aNKOJp1vgZ0VcxuFABQAUAFABQAUAFABQAUAFAHhHxX0LU/AnjOL4geG0xayy5uowPlR2+8GH9x/0b04r38FWhiqP1erv0/ryPGxdKWGq+3p7f1+Z6tot7oPj3wlb30llBd2VyuWguED+W44KnPQg55/EV5NSFTC1XG9mj0oSp4mmpWumT+HPCnh7w7b3MGj6VDax3R/fjJfzOvBLEnHJ46cmpq4mrWac3exVOhTpJqCtc8R8f/CbxHp+tXKeEYJLnSNRIDQpMF8r5gwRwSMqCMg847+/uYXMqU4L22kkePiMBUjJ+y2YeOfAmpfDq30fxb4euH820SNL4qSQsuAC//XNjkEH1HrwYbGQxjlRqLfb0/wA0FfCywqjVp9N/67HsHhbxzoGs+GLTWptRsrESriWOe4VPLkH3l5I79PUEGvGrYOpTqOCTZ6tLFU6lNTbsTSeOfBkbYbxTo5/3bxG/kaSwdd/Yf3DeKor7a+8tWXinwzesEtPEOkzueix3kZb8s5qJYetHeL+4qNelLaS+82FIYAqQQehFYmoUAFABQAUAFABQAUAeG/tMarqP9p6R4fa4ez0i5QSzShSVdt+DkDqEGGx/tfSvdyinHllUteS/r8Tx80qS5ow2X9fkeo/DrS9E0fwlZ2Xh+7S8sgC32hXDeax5ZiR39u3SvLxdSpUquVRWZ6OGhCFNKDujoa5jc80+Inxc0fw5PJpulRjVtUU7GVGxFE3ozDqf9kfiRXp4XLKlZc09Inn4nMIUnyx1ZxjaR8XviFEzajcnSNMm6wyEwIV9Ngy7D/e/Ou32uBwj91cz+/8AHb7jk9njMT8TsvuNTS/gBp6AHVPEN1Me620Cx4/Fi38qynnUvsx+81hlMftSNiP4FeDFGGudYk92uE/ogrF5xX7L+vmarK6PdlS++AnhqRT9j1fVYH/6aGORR+AUH9auOc1V8UURLKqfRsxJfhZ4/wDC5a48IeJzOi8+SsjQM/8AwAkofxNbrMcNX0rQ/X/gmLwOIo60pfp/wC54b+L+r6NqY0b4haVLbSrgG5SEo6/7TJ0Ye6/gDUVsshUjz4eV/L+v1LpZhOnLkro9l0+8tdQsor2yuI7i2mXdHLG2VYexrxZRcHyyVmetGSkrrYnqRhQAUAFABQBj+LvDOj+KtLOnaza+dHndG6na8Tf3lPY/oe+a3oYipQlzQZlWoQrR5Zo+b9YlvPht49k0/wAIa9c3jRuBLEYztZj/AMsnUHDnHcAcnjBr6Smo4yhzVo2/rfyPAm3ha3LSlf8ArY9F+MXj3VEtNP8ACuhwzQa3qUMbXSRn95B5gGIh6OSevYfXjzcBg4NurP4Vt526nfjcVOypw+J7/wCRv/Cv4Y6b4VtYr/UY4r3WmAZpWG5YD/dj9/8Aa6n2FYY3MJ13yx0j+fqb4TBRormlrI9ErzTuCgAoAKACgDE8ZeFtH8V6U2n6vbBxyYpl4kib1U9vp0Pet8PiKlCXNBmNahCtHlkjxnwTqmq/Czx+3hLXZjJo144MUp+6u44WZfQEjDD29ufaxFOGOoe2p/Ev6t/keVQnPB1vZT+F/wBXPoGvnj2woAKACgAoAKAPDPiT4c8SeDvHUnj/AMMQm6t5WMlzHs3+WSPnDKOSh65HT2wDXvYSvSxFH6vV0fT+u54+Jo1KFX29PVFX4ExSeLPiXrXjDUUDSQDzEXqEeUkKB7KisB+FVmTWHw8aMev6f8EjAL21eVWX9XPfa+fPbCgAoAKACgAoAKAPKf2mNEjvfBcOsqg8/Tp1y/fy5DtI/wC+tn6162UVXGs4dH+h5uZ0lKlz9jsfhdqz638P9G1GVi8r24SRj1Z0JRifqVJrjxlL2VeUV3OrC1PaUYyZ0tcp0BQAUAFABQBHco0tvLGpwzoVB9CRTTs7iaujxP8AZWkCDxFaOu2ZWgYg9f8AloD+R/nXuZ0r8j9f0PIyl/GvQ9wrwj2AoAgv7y0sLOS8vrmK2t4hueWVwqqPcmqjGU3aKuxSkoq7eh5xqvxv8GWdwYbddSvwDjzIIAEP/fbKf0r0oZRXkruyOCeZ0YuyuzX8J/FPwf4juUtLe9ks7qQ4SG8Tyy59AQSpPtnNY18ur0Vdq68jSjjqNV2Ts/M7euE7AoA4T4+Txw/CrVg+CZTCiA9z5qH+QJ/Cu/LE3iY/P8jizB2w8vl+YfAOGSH4VaT5mQXMzgHsDK+P8fxozN3xMvl+Q8vVsPH5/md3XAdgUAFABQAUAFAHgGn3CfDn483kV4fs+laoWw54RUlO5W+iuNuewBr6GUfrmCTj8Uf0/wCAeJF/VcW09n+p7+CCAQQQehFfPHtkdzcQWsDT3M0cESDLPIwVR9Saai5OyE2krs8C8V3mofFj4kjw1pd5s0KxYlpYzuQheGl44YknavbkHua+goRjgMP7Wa95/wBW/wAzxKspY2v7OL91f1c9W0H4deDNHs1t4dBsrlgMNNdxLNI59SWBx9BgV5NXHV6ju5Nemh6dPB0YKyjf1Ob+Ivwi0LWNNmufD9nDpmqRqWjWEbYpSP4SvRc+ox75rpwmZ1KckqjuvxOfE5fTnG8FZkf7Pvi+81rS7rw/rDu+oaZgK8n33izjDZ7qRgn3HvTzTCxpyVSGzFl2IdSLhPdHqdeUekeDfG7xEfGXiLTvAvht1u9twDO6HKNLyAMjsgLEnp+Ve/l1D6tTlXq6afh/wTxcdW9vNUaep7ZoOmwaPollpVt/qrSBIVPc7RjJ9z1rxKtR1Jub6nr04KEVFdC7WZYUAFABQAUAFAHg/wC0RrWl65qdj4W0qx/tDWoJsGaLJMRb/lkMfeJ4J9Meuce/lVKdKLqzdo/1qeNmNSNSSpxV5f1oM0/wL8Y9MsobWw8QrHBsGIlv2Ii4+7yOMdPl49KcsZgZtuUdfQUcLjIK0ZfiWIPgz4o1qdZ/F3i4y4OcK8lw30BfAX8M1LzWjTVqMP0Gsuq1HerP9SL9l9YrXXvEdjOAt4iRgA9Qqs4f9StPObyhCS2FlVlOae57xXgHtBQB8w2MPii/+LXiWXwDN5VyJ7hmdWRVMZlGfvcctg19TJ0Y4WCxG2n5HzsVVliJ+w31/M6aXwJ8XtfU22t+Ixb2rcSK14cMPTbGMN9DXKsZgaWsIa+n+Z0PC4yrpOWnr/kR+Jfg5qPhzSINa8K6rd3Wq2X7yVVUIzY/iiA5BH90k5/QujmkK0nCrG0X/WoVculSip03dr+tDvfg78QY/GOmNaXuyLWbVR56DgSr08xR9eo7H6ivPx+CeHlePws7cFi1XjZ/Ejv6887QoAKACgAoA4v4x+Lj4R8ISXFswGoXR8i0z/CxHL/8BH64ruwGG+sVbPZbnJjcR7CndbvY534B+B00zS08Vashl1W/UyQmTkwxt35/ibqT6ED1rozPF88vZQ+Ff1+Bhl+F5I+1luz1avJPSCgDwn4m6FrfgXxz/wAJ/wCGoTLZzOXu4wCVRm++HA/gbrnsfTivewdaniqP1erv0/ryPGxVKeHq+3p7dTrdB+NHgu/s1k1C5n0u4x88UsLuM98MgOR9cfSuSrlWIg/dV0dVPMqMl7zsc/49+Mttd2raP4Jiurq+uv3S3XlFdueP3an5i3pkDHvXRhsqcXz19Eun+ZhiMxTXJR1bOm+B3gibwloMt1qSgarflWmXOfKQfdTPrySfc47Vy5ji1iJ2j8KOjAYZ0YXluz0OvOO4KAPAfi1p8nw/+JGm+M9GQx213KXmiThS4/1i/R1OfrmvoMDNYvDyoT3X9L7jxMZB4auqsNn/AE/vPeraaO4t47iFt0cqB0PqCMg14DTTsz2k01dElIYUAFABQB4V8dlOs/Fbwv4dlY/ZnWIEZ4/ezFW/RBXvZb+7w1Sot9fwR42P/eYiFN7f5s90RVRAiKFVRgAdAK8I9kWkAUAIwDKVYAgjBB6GgDkNV+GPgXUrgz3Hh63SRjkmB3hB/BCB+ldsMwxMFZS/U5Z4KhN3cTT8N+D/AAz4dbfo2jW1rLjHm4LyY9N7Etj8ayq4qtW+OVzSlh6VL4I2N2uc2CgAoA8q/aeEJ8AWpfHmDUY/L/74fP6V62T39u/T/I83NLexXqeheEv+RV0j/rxh/wDQBXnV/wCLL1Z3Uf4cfRGnWRoFABQAUAeG/tEQz6P408N+Loo2ZISqMR/ejk3gfiGP5V7uVNVKM6L/AKvoePmScKsKq/qx7Xp13b6hYW99aSCS3uI1licfxKwyD+teJOLhJxe6PXjJSSkupPUjCgAoAKACgAoAKACgDwr9oS/k8QeLdE8E6a3mTrIGlA5AkkwFB+i5J9mr3srgqVKVeX9WPGzGftakaMT2+yt0tLKC1iz5cMaxrn0AwP5V4cpOTbZ7EVyqyJqkYUAFABQBg+PfDVp4s8MXOj3WFZxvglx/qpR91v6H2Jrow2Ilh6imjHEUVWpuDPKPhJ4xuvBurS+AvGANqkUpW2mkPyxMedpP9xs5De/oePWx2FjiY/WKOvf+u55mDxDoS9jV0PdRyMivBPZCgAoAKACgAoAKAON+KXjyw8F6QSWSfVJ1P2W2z3/vt6KP16DvjtwWDliZ/wB1bs5cXio0I+fQ474D+EL6W9m8e+It7314We1Eg+bD/elI7ZBwPbPqK7MyxUUlh6ey3/yOTAYeTft6m72/zPY68Y9UKACgAoAKACgDjvib4A0vxrp483FrqUK4t7tVyR/ssP4l/l2757cHjZ4aWmq7HLisJHELXR9zzDQvGfi/4YXqeH/F9hNe6Wp2wSg5KqO8bnhl/wBk4I6cdK9SphaGNXtKLs/63POp4mthHyVVdf1seyeFvFvh7xNAJdG1OGdsZaEnbKn1Q8/j0rxa2Gq0XaaPVpYinVV4M3KwNgoAKAIb27tbG2e5vbmG2gQZaSVwij6k8VUYuTtFXYpSUVds8n8c/Ge0hc6X4NgbVL+Q+Ws+wmNWPHyL1c/p9a9bDZVJ+/Wdl/X3HmV8yS92lqyr8PfhfqGp6oPFXxBkkurqRvMSzlOST2MnbA7IOOmfSrxWYRhH2WH0Xf8Ay/zJw2BlOXtK+r7f5/5HtAAAAAAA6AV4h6wUAFABQAUAFABQAUAVNW03T9WsnstTs4Lu2f70cqBh9fY+9XCpKm+aLsyZwjNWkro8p8S/A3T5JzeeF9Vn0uYHckUpLop/2WHzL/49XrUc3kly1Y3PMq5XFu9N2MuHSvjr4fbybO9/tSBTwWnimBH1lw9aupl1XWSt96/LQzVPHU9E7/d+poR698c0jKt4ZsXbsxVMj8pMVm6OXP7b/r5F+1x38q/r5lW5uvj3qH7qOxisVbgtH9nX9WYkfhVqOWw1bv8AeS5Y+WlrfcR2nwe8Va/cpdeNPFLsAc+WkjTuPYFsKv4ZpyzSjSVqEP0BZfVqO9af6npvg3wL4a8KIDpWnr9pxhrqb55m/wCBHp9BgV5eIxlWv8b07dD0KOFpUfhWvc6auU6AoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/9k="></image>' +
      "      </defs>" +
      "  </svg>" +
      "      </div>" +
      "  " +
      '      <div class="eg_content">' +
      '          <p class="eg_inr_off">' +
      "              Get <b>15% off </b>your next purchase  when you sign up to recieve our latest news and information." +
      "          </p>" +
      '          <p class="eg_signup">' +
      "              Sign-up Now" +
      "          </p>" +
      "      </div>" +
      "  </div>";

    /* Variation functions */
    const target = document.querySelector(
      "#shopify-section-product > section > div > div > div > div > div > [data-product-sku]"
    );

    function init() {
      document
        .querySelector("div.product-details > div > form > div.content")
        .insertAdjacentElement("afterend", target);

      document
        .querySelector(
          "#shopify-section-product form > div.content > p:nth-child(1)"
        )
        .insertAdjacentHTML("afterend", egString);
    }
    /* Initialize variation */
    waitForElement(".product-details", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
