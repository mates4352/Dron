
/* active(onclick) */

function getClass(bt) {
	let bth=document.querySelector('.header__burger')
	let wrapper=document.querySelector('.wrapper');

	bth.onclick = function () {
		bth.classList.toggle("active")
		bt.classList.toggle("active")
		wrapper.classList.toggle("lock")
	}
}
getClass(
	document.querySelector('.menu')
)



// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger,.menu').toggleClass('active');
// 		// 		body.lock{
// 		// 		overflow: hidden;  -блокирует блок при скроле 
// 		$('body').toggleClass('lock');
// 	});
// });




