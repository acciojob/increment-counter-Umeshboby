//your JS code here. If required.
//your JS code here. If required.
const currentNum = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

let count = 0;

function buttonClick(){

	alert(count);
	count++;
	
	
	document.getElementById('counter').textContent = count;
	
}