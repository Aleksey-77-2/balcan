const openPopup = document.getElementById('open_pop_up');
const closePopup = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopup.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})

closePopup.addEventListener('click', function(){
	popUp.classList.remove()	
})