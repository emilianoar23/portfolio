document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let messageOverlay = document.getElementById('message-overlay');
    let messagePopup = document.querySelector('.message-popup');

    messageOverlay.style.display = 'block';

    setTimeout(function () {
        messageOverlay.style.display = 'none';
    }, 3500); // Ocultar después de 3.5 segundos
});

document.querySelector('.message-overlay').addEventListener('click', function (event) {
    if (event.target.classList.contains('message-overlay')) {
        this.style.display = 'none';
    }
});