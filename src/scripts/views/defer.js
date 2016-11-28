var myApp = angular.module("myApp",[]);

myApp.factory("loginGit",function($q,$log,$timeout){
   var _login = function(successFn,errorFn){
       var userName = "";
       // 创建一个defer对象
       var defer = $q.defer();
       $timeout(function(){
           var data = {
           	   status:"ok",
           	   userName:"marry"
           };
           if(data.status === "ok"){
               username = data.userName;
               defer.resolve(username);
           }else{
               defer.reject("您不是gitHup的用户");
           }
       },3000)

       defer.promise
            .then(function(username){
                successFn(username);
            },function(err){
                errorFn(err);
            })
   }
   return {
   	  login:_login
   }
});

myApp.controller("myDefer",function($scope,loginGit){
    loginGit.login(function(username){
        $scope.username = username;
    },function(errmsg){
        $scope.username = errmsg;
    }); 
})
