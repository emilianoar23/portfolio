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
    }, 3000); // Ocultar después de 3 segundos
  });