(function () {
  function setCookie(key, value) {
    localStorage.setItem(key, value);
  }

  function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
  }

  function addStyle(styles, id) {

    /* Create style element */
    var css = document.createElement('style');
    css.id = id || 'theme'
    css.type = 'text/css';

    if (css.styleSheet)
      css.styleSheet.cssText = styles;
    else
      css.appendChild(document.createTextNode(styles));

    /* Append style to the head element */
    document.getElementsByTagName("head")[0].appendChild(css);
  }

  var white = '\
  body {\
    background-color: #ffffff;\
    color: #000000;\
  }\
  \
  .footer, .flink, .ba {\
    color: #000000;\
  }\
  \
  '

  var black = '\
  body {\
    background-color: #3a3e4a;\
    color: #d2d2d2;\
  }\
  \
  .footer, .flink, .ba {\
    color: #d2d2d2;\
  }\
  '

  if (getCookie("style") === "white") {
    addStyle(white)
  } else if (getCookie("style") === "black") {
    addStyle(black)
  }

})();