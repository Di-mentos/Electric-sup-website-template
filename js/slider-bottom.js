var buttons = document.getElementsByClassName("test__sign");
var blocks = document.getElementsByClassName("slider-block");

var prev = 1;
var cur = 1;

document.addEventListener('click', function(w){
	for(var i=0; i<buttons.length; i++){
		if(w.target.getAttribute("name") == buttons[i].getAttribute("name")){
			cur = i;
			if(cur!=prev){
			blocks[prev].style.opacity = "0";
			buttons[prev].style.background = "#f9bf16";
				blocks[prev].addEventListener('transitionend', function f1(){
					blocks[prev].style.transform = "scale(0)";
					
					blocks[cur].style.transform = "scale(1)";
					blocks[cur].addEventListener('transitionend', function f2(){
						blocks[cur].style.opacity = "1";
						buttons[cur].style.background = "#000";
						blocks[cur].removeEventListener('transitionend', f2);
					})
					
					console.log("Current block is: " + cur);
					prev = cur;
					blocks[prev].removeEventListener('transitionend', f1);
				})
			}
			else if(cur == prev){
				break;
			}
		}
	}
})
