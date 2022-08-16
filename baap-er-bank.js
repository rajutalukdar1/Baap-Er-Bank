document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit btn')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password)

    // Danger : Do not use this type

    if (email === 'raju4222@gmail.com' && password === 'raju4222') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Dure gia mor NA hoila Gmail password tik kor')
    }
})