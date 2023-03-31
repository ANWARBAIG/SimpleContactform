const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
event.preventDefault();
if (validateForm()) {
displaySuccess();
}
});

function validateForm() {
let valid = true;
const title = document.getElementById('title').value;
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const telephone = document.getElementById('telephone').value;
const email = document.getElementById('email').value;

// validate title
if (title === '') {
valid = false;
document.getElementById('title-error').innerText = 'Please select a title.';
} else {
document.getElementById('title-error').innerText = '';
}

// validate first name
if (firstName === '') {
valid = false;
document.getElementById('firstName-error').innerText = 'Please enter your first name.';
} else {
document.getElementById('firstName-error').innerText = '';
}

// validate last name
if (lastName === '') {
valid = false;
document.getElementById('lastName-error').innerText = 'Please enter your last name.';
} else {
document.getElementById('lastName-error').innerText = '';
}

// validate telephone
if (!/^[0-9]{10}$/.test(telephone)) {
valid = false;
document.getElementById('telephone-error').innerText = 'Please enter a valid 10 digit telephone number.';
} else {
document.getElementById('telephone-error').innerText = '';
}

// validate email
if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
valid = false;
document.getElementById('email-error').innerText = 'Please enter a valid email address.';
} else {
document.getElementById('email-error').innerText = '';
}

return valid;
}

function displaySuccess() {
const title = document.getElementById('title').value;
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const dob = document.getElementById('dob').value;
const telephone = document.getElementById('telephone').value;
const fileUpload = document.getElementById('fileUpload').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

const successMessage = document.createElement('p');
successMessage.classList.add('success');
successMessage.innerText =`Thank you ${title} ${firstName} ${lastName}! You have submitted the following details:\n\nDate of Birth: ${dob}\nTelephone: ${telephone}\nFile Uploaded: ${fileUpload}\nMessage: ${message}`;

form.innerHTML = '';
form.appendChild(successMessage);
}