var sectionA = document.getElementById('showNoShow'); // section listener
var buttonA = document.getElementById('showAndTell'); // button listener


// Hide section using css & js with className change
var showHide = function() {
	if(sectionA.className == 'show') {
		sectionA.className = 'hide'
	} else {
		sectionA.className = 'show'
	}
}


// Hide using style.display in js(not currently working)
// var showHide = function() { 
// 	if(sectionA.style.display === 'none') {
// 		sectionA.style.display = 'block';
// 	} else {
// 		sectionA.style.display = 'none';
// 	}
// }

buttonA.addEventListener('click', showHide);