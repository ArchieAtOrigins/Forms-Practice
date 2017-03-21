// FORM WORLD
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
// Hide using alternate methos of style.display in js
// var showHide = function() { 
// 	if(sectionA.style.display === 'none') {
// 		sectionA.style.display = 'block';
// 	} else {
// 		sectionA.style.display = 'none';
// 	}
// }

buttonA.addEventListener('click', showHide);
//***********************************************


// TEXT BOX
// Capture and output text box entry to paragraph
//  Attach form to var
var form1 = document.forms.txtbx;
// Attach input to var
var input = form1.elements.textBox;

var para1 = document.getElementById('para1');

form1.addEventListener('submit', captureTxt, false);

function captureTxt(event) {
	console.log("captureTxt connected" + input.value);
	var node = document.createTextNode(input.value);
	para1.appendChild(node);
	event.preventDefault();
}
// End capture and output text to paragraph


// CHECKBOX
// Create an array from the checked items in the Menu Selection
// IN PROGRESS: considering adding eventlistener vs onchange, to capture changes of state of the checkboxes.


function updateArray() {

	console.log(form2.checkbox.length);
	var choices = [];
	var form2 = document.forms.chkbx;

	for(var i = 0; i<form2.checkbox.length; i++) {
		if(form2.checkbox[i].checked == true) {
			choices.push(form2.checkbox[i].value);
		}
	}
	// chkbx.addEventListener('change', updateArray);

	console.log(choices);
}
updateArray();
// End create array from checked items
//************************************



