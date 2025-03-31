// 事项详情分享链接
if (
  window.location.href.indexOf("serviceDetail/sharePage/handle") > 0
) {
  let wid = getQueryVariable("wid");
  // 如果当前浏览器为移动端,且已购买移动端，则跳转至移动端系统
  if (AMPConfigure.ywtbMobile === "1" && !isPc()) {
    window.location.href =
      publicAppPath +
      basePath +
      "ywtb-mobile/index.html#/MatterDetail?serviceWid=" +
      wid;
  }
  // standard模板详情页
  else if ("standard" === AMPConfigure.ywtbModule) {
    window.location.href =
      publicAppPath +
      basePath +
      "ywtb-portal/standard/index.html#/matter_details/%e9%93%be%e6%8e%a5%e5%88%86%e4%ba%ab/work/" +
      wid;
  }
  // official模板详情页
  else {
    window.location.href =
      publicAppPath +
      basePath +
      "ywtb-portal/official/index.html#/matter_detail?serviceWid=" +
      wid;
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function isPc() {
  let isPcFlag = true;
  if (
    /AppleWebKit.*mobile/i.test(navigator.userAgent) ||
    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
      .test(
        navigator.userAgent
      )
  ) {
    if (window.location.href.indexOf("?mobile") < 0) {
      try {
        if (
          /Android|webOS|iPhone|iPod|BlackBerry/i.test(
            navigator.userAgent
          )
        ) {
          // window.location.href = "手机页面";
          isPcFlag = false;
        } else if (/iPad/i.test(navigator.userAgent)) {
          // window.location.href = "平板页面";
          isPcFlag = false;
        } else {
          // window.location.href = "其他移动端页面";
          isPcFlag = false;
        }
      } catch (e) { }
    }
  }
  
  return isPcFlag;
}