app.controller("infoController",["$scope",function($scope){
	$scope.pullImg = function(){
		setInterval(function(){
			$("#url1").val($("#image1").val())			
		},20)
	}
	$scope.submit = function(){
		alert("数据已经提交");
	}

}]);