function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const age = document.getElementById('age');
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Enter an email.';
        msgBox.style.color = 'red';
    } else if (password === '') {
        message = 'Enter a password.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Enter your age.';
        msgBox.style.color = 'red';
    } else {
        message = 'Login successful!';
        msgBox.style.color = 'green';

    }
    msgBox.innerText = message;

}