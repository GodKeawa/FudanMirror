$(function(){
	$(".search-submit").click(function(event){
		$(this).removeAttr("name");
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".wp-search").find("form").submit();
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	/*导航*/
	/*$.fn.sudyNav = function(){};
	$(".wp-menu li").hover(function() {
		$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
		$(this).children('.sub-menu').stop(true,true).slideDown(200);
		$(this).addClass('hover');
	}, function() {
		$(this).children('.sub-menu').stop(true,true).slideUp(150);
		$(this).removeClass('hover');
    });
	
	$(".wp-menu li").each(function(){
		$(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
	});*/
	
	$(window).on('scroll',function() {
            if ($(this).scrollTop() > 230){  
                $('#nav').addClass("is-sticky");
            }
            else{
                $('#nav').removeClass("is-sticky");
            }
		});
	$(".mbanner .focus").sudyfocus({      
		p:2,
		zWidth:1920,
		zHeight:303,
		title:{
			isAutoWidth: false,
			active:false
		},
		 text:{
			 active: false,
			 isAutoHeight: false,
			 href: false
		},
		response: true,
		speed:700, 
		pagination: false,
		navigation: false,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});

	
});
$('title').text('复旦大学软件学院-国家示范性软件学院')
