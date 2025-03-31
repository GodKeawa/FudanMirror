function loadCard(options) {
  return new Promise(function(resolve, reject) {
    require([options.url], function(data) {
      if (data) {
        resolve(
          data(options.root, options.config)
        )   
      }
    });
  });
}
