function showBrowserWarningByGetAgent() {
  var userAgent = navigator.userAgent.toLowerCase(); //取得浏览器的userAgent字符串
  var isFireFox = userAgent.indexOf("firefox") > -1; //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf("safari") > -1 && userAgent.indexOf("chrome") == -1; //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf("chrome") > -1 && userAgent.indexOf("safari") > -1; //判断Chrome浏览器
  var isOpera = userAgent.indexOf("opera") > -1; //判断是否Opera浏览器
  var isSolo = userAgent.indexOf("metasr") > -1; //判断是否搜狗浏览器

  var isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("msie") > -1 &&
    !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("windows nt 6.1; trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
  // IE11、Edge、Chrome、Firefox、Safari
  var isIE11 =
    userAgent.indexOf("trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
  // 在搜狗，<ie11，opera,360上展示
  if (isSolo || (isIE && !isIE11) || isOpera || (isChrome && is360)) {
    return true;
  } else if (isEdge || isFireFox || isSafari || isChrome || isIE11) {
    return false;
  } else {
    return true;
  }
}
//测试mime
function _mime(option, value) {
  var mimeTypes = navigator.mimeTypes;
  for (var mt in mimeTypes) {
    if (mimeTypes[mt][option] == value) {
      return true;
    }
  }
  return false;
}
function loadingAdapterBrowserWaningEvent() {
  //没有关闭过且非以上浏览器时，展示提示
  document.getElementById("browser-adapter-warning-box-1").style.display =
    showBrowserWarningByGetAgent() &&
    !localStorage.getItem("browserAdapterWarningHasClosed")
      ? "block"
      : "none";

  //绑定关闭点击事件
  document.getElementById(
    "browser-adapter-warning-box-close-warning"
  ).onclick = function(event) {
    document.getElementById("browser-adapter-warning-box-1").style.display =
      "none";
    localStorage.setItem("browserAdapterWarningHasClosed", true);
  };
}
//dom执行完执行回调方法
function domHasReady(fn) {
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
      document.removeEventListener("DOMContentLoaded", arguments.callee);
      fn();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
      if (document.readystate == "complete") {
        document.dispatchEvent("onreadystatechange", arguments.callee);
        fn();
      }
    });
  }
}
domHasReady(loadingAdapterBrowserWaningEvent);
//浏览器适配提示
// document.getElementById(
//   "browser-adapter-warning-box-1"
// ).style.display = showBrowserWarningByGetAgent() ? "block" : "none";
