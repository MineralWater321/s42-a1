//Using DOM
//Retrieve an element from webpage
const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

/* Alternative in retrieving an element - getElement
	document.getElementById('txt-first-name');
	document.getElementsByClassName('txt-inputs');
	document.getElementsByTagName('input');
*/


const fullName = () =>{
	spanFullName.innerHTML = txtFirstName.value + " " + txtLastName.value
}

txtFirstName.addEventListener('keyup', fullName);
txtLastName.addEventListener('keyup', fullName);

fullName();

/*//Assign same event to multiple listeners
txtFirstName.addEventListener('keyup', (event) => {
	//Contains the element where the event happened
	console.log(event.target);
	//Gets the value of the input object
	console.log(event.target.value);
})*/