var myTpl=require("../templates/my.string");

SPA.defineView("my",{
	html:myTpl,
	plugins:["delegated",{
		name:"avalon",
		options:function(vm){
            vm.username = "";
            vm.password = "";
            vm.submit=function(){
            	$.ajax({
            		url:"./api/login.php",
            		type:"get",
            		data:{
            			username:vm.username,
            			password:vm.password
            		},
            		success:function(data){
                        console.log(data);
            		}
            	})
            }
		}
	}],
    styles:{
	    background:"#fff"
	},
	bindEvents:{
		show:function(){
		}
	},
	bindActions:{
		"tap.close":function(){
			this.hide();
		}
	}
})