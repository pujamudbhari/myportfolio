const emailjs = require('emailjs-com')


const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('my service', 'template_digs9vs', 'contact-form', 'user_5XfDh11mCTJvXZ7RPJBnN')
     .then(res => alert('Your message has been sent . I will be in contact with you soon. Thank you!'))
     .catch(err => alert('Oops! Something went wront. Try again!'))
}


document.getElementById('submitButton').onclick = submitForm