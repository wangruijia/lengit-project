var guideTpl=require("../templates/guide.string");

SPA.defineView("guide",{
	html:guideTpl,
	plugins:["delegated"],
	bindEvents:{
		show:function(){
			var mySwiper=new Swiper('.swiper-container',{
				loop:false
			});
		}
	},
	bindActions:{
		"go.home":function(e){
			SPA.open("index");  
		}
	}
})