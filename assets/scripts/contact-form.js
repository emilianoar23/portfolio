//animacion de texto
jQuery(document).ready(function($) {
    $('h2').mousemove(function(e) {
      let rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
      let rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
      $('h2').css('text-shadow', `${rYP / 10}px ${rXP / 80}px rgba(227, 6, 19, 0.8), ${rYP / 8}px ${rXP / 60}px rgba(255, 237, 0, 1), ${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`);
    });
  });

//formulario
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let messageOverlay = document.getElementById('alerta-envio');
    let messagePopup = document.querySelector('.mensaje-popup');

    messageOverlay.style.display = 'block';

    setTimeout(function () {
        messageOverlay.style.display = 'none';
    }, 3500); // Ocultar después de 3.5 segundos
});

document.querySelector('.alerta-envio').addEventListener('click', function (event) {
    if (event.target.classList.contains('alerta-envio')) {
        this.style.display = 'none';
    }
});