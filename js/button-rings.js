var c1 = document.getElementsByClassName("about__circle1")[0];
var c2 = document.getElementsByClassName("about__circle2")[0];
var buttonV = document.getElementsByClassName("about__video-button")[0];

var k = 0;
var k2 = 0;

function scaling1(){
	c1.style.transform = "scale(1.5)";
	c1.style.opacity = "0";
	c1.style.transition = "scale, 1s linear, opacity 0.8s linear 0.5s";
	c1.addEventListener('transitionend', function f1(){
		if(window.getComputedStyle(c1).opacity == "0"){
			c1.style.transition = "";
			c1.style.transform = "scale(1)";
			c1.style.opacity = "1";

			//console.log("scale k = " + k);
			k++;
		}
	})
	setInterval(scaling1, 1500);
}

/*function scaling2(){
	c2.style.transform = "scale(1.5)";
	c2.style.opacity = "0";
	c2.style.transition = "scale, 1s linear, opacity 0.8s linear 0.5s";
	c2.addEventListener('transitionend', function f2(){
		if(window.getComputedStyle(c2).opacity == "0"){
			c2.style.transition = "";
			c2.style.transform = "scale(1)";
			c2.style.opacity = "1";
			
			//console.log("scale k2 = " + k2);
			k2++;
		}
	})
	setInterval(scaling2, 1500);
}*/

scaling1();
//setTimeout(scaling2, 1500);
