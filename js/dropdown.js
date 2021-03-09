// JavaScript Document
/*function dropMenudown(){
	document.getElementById("drop1").style.display="none"
	if(document.getElementById("drop1").style.display=="none"){
	document.getElementById("drop1").style.display="block";
	}
}

function dropMenuup(){
	if(document.getElementById("drop1").style.display=="block"){
	document.getElementById("drop1").style.display="none";
	}
}*/

$(document).ready(function(){
	$(".menu").mouseover(function(){
	  var maxL = $(".menu").length;
	  var index = $(this).index();
	  $(".drop-content").eq(index).css("display","block");
	});
	
	$(".menu").mouseout(function(){
	  var maxL = $(".menu").length;
	  var index = $(this).index();
	  $(".drop-content").eq(index).css("display","none");
	});
});
/*$(document).ready(function(){
  $("#menu").children("ul").get;
});*/