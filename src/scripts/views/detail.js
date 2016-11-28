var detailTpl=require("../templates/detail.string");

SPA.defineView("detail",{
	html:detailTpl,
	plugins:["delegated",{
		name:"avalon",
		options:function(vm){
            vm.imgsrc = null;
            vm.title = null;
            vm.description = null;
            vm.isShowLoading = true;
		}
	}],
	init:{
       detailId:""
	},
	bindEvents:{
		show:function(){
			var that = this;
			var vm = this.getVM();
            var data = this.param;
			// 获取id
			$.ajax({
				//url:"/footballApp/mock/liveDetail.json",
				url:"/api/getLiveDetail.php",
				type:"get",
				data:{
					id:data.id
				},
				success:function(rs){
					var data = rs.data;
                    vm.imgsrc =  data.imgsrc;
                    vm.title = data.title;
                    vm.description = data.description;
                    that.detailId = data.id;
                    setTimeout(function(){
                        vm.isShowLoading = false;
                    },300)
				}
			})
		}
	},
	bindActions:{
		"back":function(){
            this.hide({
            	detailId:this.detailId
            });
		}
	}
})