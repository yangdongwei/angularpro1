$(function(){


	$(".button").click(function(){
	var userID = $(".loginName").val();
	var password = $(".passWord").val();		
	console.log(userID,password)		
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				"status":"login",
				"userID":userID,
				"password":password
			},
			beforeSend:function(){
				
			},
			success:function(data){
				 if(data=="0"){
//				 	Toast.makeText("用户名不存在",1000);
					alert("用户名不存在");
				 }else if(data=="2"){
//				 	Toast.makeText("密码错误",1000);
					alert("密码错误")
				 }else{
				 	localStorage.setItem("isLogin","ok");
				 	localStorage.setItem("userID",userID);
				 	window.open("index.html","_self");
				 }
			}
		});		
	})
})
