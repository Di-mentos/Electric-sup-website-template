var form  = document.getElementsByClassName("header__search-form")[0];
var submit = document.getElementsByClassName("header__form-button")[0];

var loginForm = document.getElementsByClassName("header__login-form")[0];

var counterFormSearch = 0;
var counterFormLogin = 0;

submit.addEventListener('click', function(){
	if(counterFormSearch == 1){
		form.style.width = "21px";
		counterFormSearch--;
	}
	else if(counterFormSearch == 0){
		form.style.width = "180px";
		counterFormSearch++;
	}
})

document.addEventListener('click', function(p){
	if(p.target.className == "header__login-button" || p.target.className == "header__menu-login"){
		if(counterFormLogin == 1){
			loginForm.style.transform = "scale(0)";
			loginForm.style.transition = "all 0.6s ease";
			counterFormLogin--;
		}
		else if(counterFormLogin == 0){
			loginForm.style.transform = "scale(1)";
			loginForm.style.transition = "all 0.6s ease";
			counterFormLogin++;
		}
	}
})