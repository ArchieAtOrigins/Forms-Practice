// ShowHide functionality
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
// Hide using style.display in js
// var showHide = function() { 
// 	if(sectionA.style.display === 'none') {
// 		sectionA.style.display = 'block';
// 	} else {
// 		sectionA.style.display = 'none';
// 	}
// }

buttonA.addEventListener('click', showHide);
//***********************************************

// Capture and output text box entry to paragraph
//  Attach form to var
var form1 = document.forms.txtbx;
console.log(form1);
// Attach input to var
var input = form1.elements.textBox;
console.log(input);

var para1 = document.getElementById('para1');

form1.addEventListener('submit', captureTxt, false);

function captureTxt(event) {
	console.log("captureTxt connected" + input.value);
	var node = document.createTextNode(input.value);
	para1.appendChild(node);
	event.preventDefault();
}
