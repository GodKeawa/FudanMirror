function getHtml(url) {
  return new Promise(function (resolve) {
    require([url], function (html) {
      if (html) {
        resolve(html);
      }
    });
  });
}

function getCustomData(url) {
  return new Promise(function (resolve) {
    require([url], function (data) {
      if (data) {
        resolve(data);
      }
    });
  });
}