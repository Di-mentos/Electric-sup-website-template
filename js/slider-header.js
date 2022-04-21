var btnLeft = document.getElementsByClassName("header__button-left")[0];
var btnRight = document.getElementsByClassName("header__button-right")[0];

var arrowLeft = document.getElementsByClassName("header__arrow-left")[0];
var arrowRight = document.getElementsByClassName("header__arrow-right")[0];

var block = document.getElementsByClassName("content__slide1");
var counter = 0;
btnLeft.removeAttribute("onclick");

function clickRight(){
	btnLeft.setAttribute("onclick", "clickLeft()");

	console.log("counter = " + counter);
	block[counter].style.opacity = "0";
	btnLeft.style.background = "#f9bf16";
	btnLeft.style.borderColor = "#f9e616";
	arrowLeft.style.filter = "invert(0%)";
	btnRight.removeAttribute("onclick");
	counter++;

	block[counter-1].addEventListener('transitionend', function f2(){
		console.log("counter = " + counter);
		if(counter<2){
			btnRight.setAttribute("onclick", "clickRight()");
		}
		block[counter-1].style.display = "none";
		block[counter].style.display = "block";
		if(window.getComputedStyle(block[counter]).display == "block"){
			block[counter].style.opacity = "1";
		}
		block[counter-1].removeEventListener('transitionend', f2);
	});
	if(counter == 2){
		btnRight.style.background = "#fff";
		btnRight.style.borderColor = "#000";
		arrowRight.style.filter = "invert(100%)";
		btnRight.removeAttribute("onclick");
	}
}

function clickLeft(){
	btnRight.setAttribute("onclick", "clickRight()");

	console.log("counter = " + counter);
	block[counter].style.opacity = "0";
	btnRight.style.background = "#f9bf16";
	btnRight.style.borderColor = "#f9e616";
	arrowRight.style.filter = "invert(0%)";
	btnLeft.removeAttribute("onclick");
	counter--;

	block[counter+1].addEventListener('transitionend', function f2(){
		console.log("counter = " + counter);
		if(counter>0){
			btnLeft.setAttribute("onclick", "clickLeft()");
		}
		block[counter+1].style.display = "none";
		block[counter].style.display = "block";
		if(window.getComputedStyle(block[counter]).display == "block"){
			block[counter].style.opacity = "1";
		}
		block[counter+1].removeEventListener('transitionend', f2);
	});
	if(counter == 0){
		btnLeft.style.background = "#fff";
		btnLeft.style.borderColor = "#000";
		arrowLeft.style.filter = "invert(100%)";
		btnLeft.removeAttribute("onclick");
	}
}