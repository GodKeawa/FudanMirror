﻿$(document).ready(function () {
    //对应用名进行手动支持国际化
    var serviceNames = document.getElementById("appNames").innerText;
    var serviceName_zh= "";
    var serviceName_en = "";
    if (serviceNames != "undefined" && serviceNames != ""){
        var serviceName =  serviceNames.split(",");
        if (serviceName.length == 2 ){
            serviceName_zh = serviceName[0];
            serviceName_en = serviceName[1];
        }
    }
    var language = navigator.browserLanguage?navigator.browserLanguage:navigator.language;
    var value = getCookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE");
    if (typeof(value) == "undefined" ){
        if (language.indexOf("en") != -1){
			$("#findPassword").text('Find password');
            setCookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE","en");
            document.getElementById("appNames").innerHTML = " " + serviceName_en;
        }else {
            setCookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE","zh_CN");
            document.getElementById("appNames").innerHTML = serviceName_zh;
        }
    }else if (value == "en"){
		$("#findPassword").text('Find password');
        document.getElementById("language").value = "en";
        document.getElementById("appNames").innerHTML = " " + serviceName_en;
    }else if(value == "zh_CN") {
        document.getElementById("language").value = "zh_CN";
        document.getElementById("appNames").innerHTML = serviceName_zh;
    }
    document.getElementById("appNames").style.display = "inline";

});

function changeLanguage(){
    var value = document.getElementById("language").value;
    if (value != "en" && value != "zh_CN"){
        value = "zh_CN";
    }
    setCookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE",value);
    window.location.reload();
}

function setCookie(_3a,_3b){
    document.cookie=_3a+"="+escape(_3b)+";expires="+(new Date(1990,1,1)).toGMTString();
    document.cookie=_3a+"="+escape(_3b)+";path=/"+";expires="+(new Date(2099,12,31)).toGMTString();
};

function getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1) {
        cookie_pos += cookie_name.length + 1;
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;

}