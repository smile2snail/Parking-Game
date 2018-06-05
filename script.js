$(document).ready(function(){
	var index=1;
	$(".car").click(function(){
		if(index%6==1){
			$(this).animate({top:"350px"},600)
		}
		else if(index%6==2){
			$(this).animate({top:"262.5px"},600)
		}
		else if(index%6==3){
			$(this).animate({top:"175px"},600)
		}
		else if(index%6==4){
			$(this).animate({top:"87.5px"},600)
		}
		else if(index%6==5){
			$(this).animate({top:"0px"},600)
		}
		else{
			$(this).animate({top:"-60px"},600)
			alert("You Reach the Dead End!")
		}
		index++;
		});
	$(".Park").click(function(){
		if(index%6==5){
			alert("Congratulations! You park your car successfully!");
			$(".car").animate({left:"0px"},600);
			index=2;
			$(".car").animate({top:"350px",left:"350px"},600)	
		}
		else{
			alert("You Crash into another car!")
			index=2;
			$(".car").animate({top:"350px",left:"350px"},600)	
		}	
	});
})