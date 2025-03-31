$(function(){
	/*主大图切换*/
	
	/*新闻图片切换*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
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
	
	

});
