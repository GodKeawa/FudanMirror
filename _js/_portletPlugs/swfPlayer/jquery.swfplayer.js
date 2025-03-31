/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//document.write('<script type="text/javascript" src="' + '' + '/_test/flexpaper2/flexpaper.css"></script>');
//document.write('<script type="text/javascript" src="' + '' + '/_test/flexpaper2/jquery.extensions.min.js"></script>');
//document.write('<script type="text/javascript" src="' + '' + '/_test/flexpaper2/flexpaper_handlers.js"></script>');
(function () {
    var content = '';
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    if (isIE) {
        document.write('<script type="text/javascript" src="/_js/_portletPlugs/swfPlayer/map.js"></script>');
    }
    try {
        content = parent.window.relativeURL;
    } catch (err) {}
    // var content = parent.window.relativeURL;
    if (!content) {
        content = '';
    }
    document.write('<link type="text/css" href="' + content + '/_js/_portletPlugs/swfPlayer/pdfjs/view.css" rel="stylesheet" />');
    document.write('<link rel="resource" type="application/l10n" href="' + content + '/_js/_portletPlugs/swfPlayer/pdfjs/locale/locale.properties" />');
    // document.write('<script type="text/javascript" src="/_js/_portletPlugs/swfPlayer/pdfjs/build/pdf.js"></script> ');
    document.write('<script type="text/javascript" src="' + content + '/_js/_portletPlugs/swfPlayer/jquery.swfplayer1.js?t=' + new Date().getTime() + '"></script>');

})();