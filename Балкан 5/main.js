// Плавность прокрутки

const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
	anchor.addEventListener("click", function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' +blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

// Конец плавности прокрутки
// Шапка
const scrollController = {
	scrollPosition:0,
	disabledScroll(){
		scrollController.scrollPosition = window.scrollY;
		document.body.style.cssText =`
			overflow: hidden;
			position: fixed;
			top: -${scrollController.scrollPosition}px;
			left: 0;
			height: 100vh;
			width: 100vw;
			padding-right: ${window.innerWidth - document.body.offsetWidth}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},
	enabledScroll(){
		document.body.style.cssText = '';
		window.scroll({top: scrollController.scrollPosition})
		document.documentElement.style.scrollBehavior = '';
	},
}
// Конец Шапка
//Форма
const openPopup = document.getElementById('open_pop_up');
const closePopup = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopup.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
	scrollController.disabledScroll();
	header.classList.remove('fixed');
})

closePopup.addEventListener('click', function(){
	popUp.classList.remove('active');	
	scrollController.enabledScroll();	
})

//Конец Формы


// Фиксация шапки

const header = document.querySelector('.header_salad');
const headerH = document.querySelector('.header_salad').clientHeight;

document.onscroll = function(){
	var scroll = window.scrollY;
	console.log(scroll)

	if(scroll > headerH) {
		header.classList.add('fixed');
	}else {
		header.classList.remove('fixed');
	}
}

// Конец Фиксации шапки 