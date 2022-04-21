var buttonBurger = document.getElementsByClassName("header__burger-button")[0];
var submenu = document.getElementsByClassName("header__submenu")[0];
var counterMenu = 0;

var link = document.getElementsByClassName("header__menu-link");
var prevValue = 0;
var curValue = 0;

document.addEventListener('click', function(w){
	for(var i=0; i<link.length; i++){
		if(w.target.getAttribute("href") == link[i].getAttribute("href")){
			curValue = i;
			link[curValue].style.color = "#f0efeb";
			if(curValue!=prevValue){
				link[prevValue].style.color = "#fceab4";
				prevValue = curValue;
			}
		}
	}
})

buttonBurger.addEventListener('click', function(){
	if(counterMenu == 1){
		submenu.style.opacity = "0";
		submenu.addEventListener('transitionend', function f2(){
			if(window.getComputedStyle(submenu).opacity == 0){
				submenu.style.display = "none";
				counterMenu--;
				submenu.removeEventListener('transitionend', f2);
			}
		})
	}
	else if(counterMenu == 0){
		submenu.style.display = "flex";
		if(window.getComputedStyle(submenu).display == "flex"){
			submenu.style.opacity = "1";
			counterMenu++;
		}
	}
})