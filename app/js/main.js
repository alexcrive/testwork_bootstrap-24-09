$(document).ready(function(){

if($(window).width() >= '1024') {
	$('.navbar-toggler').click(function(){
		if($('#navbarToggleExternalContent').hasClass('show')) {
			$('.main-content').removeClass('col-lg-9')
			$('.main-content').addClass('col')
		} else {
			$('.main-content').removeClass('col')
			$('.main-content').addClass('col-lg-9')
		}
	})
} else {
	$('#navbarToggleExternalContent').removeClass('show');
}

let mainContentUl = document.getElementById('myMenu');
let mainContentCenter = document.getElementById('main-content__center');
let mainContentRightItem = document.getElementsByClassName('main-content__right__item');

let openTagMenu = "<li class='nav-item'><a class='nav-link' href='#'>";
let closeTagMenu = "</a></li>";
// заполнить меню + конент
if(myMenu) {
	for(let key in myMenu) {
		for (let i = 0; i < myMenu.element.length; i++) {
			let myMenuName = myMenu.element[i].name;
			if(myMenuName)
				mainContentUl.innerHTML += openTagMenu + myMenuName + closeTagMenu;	
		}
	}
	//стартовый текст в main-content__center
	mainContentCenter.innerHTML = myMenu.element[3].desc;
	//стартовый текст в main-content__right__item
	for (let i = 0; i < mainContentRightItem.length; i++) {
		mainContentRightItem[i].innerHTML = myMenu.element[1].desc;
	}
}

//по клику на конкретный nav-link заменяем содержимое ВСЕХ правых элементов
$( ".nav-link" ).click(function(e) {
	let currentElement = $(e.currentTarget);
	let currentElementText = currentElement[0].text;
	if(myMenu) {
		for(let key in myMenu) {
			for (let i = 0; i < myMenu.element.length - 1; i++) {
				let myMenuName = myMenu.element[i].name;
				let myMenuDesc = myMenu.element[i + 1].desc;
				if(currentElementText == myMenuName) {
					// содержимое main-content__center
					mainContentCenter.innerHTML = "";
					mainContentCenter.innerHTML += myMenuDesc;
					// содержимое всех main-content__right__item
					for(let item = 0; item < mainContentRightItem.length; item++) {
						mainContentRightItem[item].innerHTML = "";
						mainContentRightItem[item].innerHTML += myMenuDesc;
					}
				}
			}
		}
	}
});

});





