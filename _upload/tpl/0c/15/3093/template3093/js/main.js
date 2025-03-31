$(function(){

$(".post-15").sudyTab({
		handle:".tit .title",
		content:".con,.more_btn",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
 });


	//日历
    if ($(".ui-date").is("div")) {
        var DateDiv = $(".ui-date");
        DateDiv.html("");
        var monthEn = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "June.", "July.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        var currdate = new Date();
        currdate.setDate(1);
        DateDiv.append('<div class="month">' + monthEn[currdate.getMonth()] + '</div>');
        DateDiv.append('<div class="day">' + new Date().getDate() + '</div>');
        DateDiv.find("");
        var c_t = false;
        var c_set = null;
        $(".ui-date").mouseenter(function (a, b) {
            c_t = true;
            if (c_set != null) clearTimeout(c_set);
            $(".ui-rili #calendar_wh").show();
        });
        $(".ui-date").mouseleave(function (t) {
            c_t = false;
            c_set = setTimeout(function () {
                $(".rili #calendar_wh").hide();
            }, 100);

        });
	}

	/*主大图切换*/
	$(".mbanner .focus").sudyfocus({      
		p:2,
		zWidth:1145,
		zHeight:406,
		title:{
			isAutoWidth: true,
			active:true
		},
		 text:{
			 active: false,
			 isAutoHeight: false,
			 href: false
		},
		response: true,
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	/*新闻图片切换*/
	$(".post-10 .focus").sudyfocus({      
		p:10,      
		zWidth:362,      
		zHeight:253,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	
		//slick左右轮播
	$('.post-2 .news_list').slick({
			dots: true,  //指示点
			infinite: true,  //循环播放
			autoplay: true,  //自动播放
			autoplaySpeed: 5000, //自动播放间隔
			arrows: true,  //左右箭头
			useCSS: true,  //使用 CSS3 过度
			speed: 600,  //滑动时间
			slide: 'li',  //滑动元素查询
			slidesToShow: 1,  //幻灯片每屏显示个数
			slidesToScroll: 1  //幻灯片每次滑动个数
	});
	
	$('.post-16 .news_list').slick({
			dots: false,  //指示点
			infinite: true,  //循环播放
			autoplay: true,  //自动播放
			autoplaySpeed: 5000, //自动播放间隔
			arrows: true,  //左右箭头
			useCSS: true,  //使用 CSS3 过度
			speed: 600,  //滑动时间
			slide: 'li',  //滑动元素查询
			slidesToShow: 2,  //幻灯片每屏显示个数
			slidesToScroll: 1  //幻灯片每次滑动个数
	});
	
	/*新闻tab切换*/
	$(".post-33").sudyTab({
		handle:".tit .title",
		content:".con .boxm,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	});	
	
	/*友情链接下拉*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	});



});
