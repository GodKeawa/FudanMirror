﻿$(function(){

//slick左右轮播
	$('.post-11 .news_list').slick({
			dots: false,  //指示点
			infinite: true,  //循环播放
			autoplay: true,  //自动播放
			autoplaySpeed: 5000, //自动播放间隔
			arrows: true,  //左右箭头
			useCSS: true,  //使用 CSS3 过度
			speed: 600,  //滑动时间
			slide: 'li',  //滑动元素查询
			slidesToShow: 1,  //幻灯片每屏显示个数
			slidesToScroll: 1,  //幻灯片每次滑动个数
	});
});
