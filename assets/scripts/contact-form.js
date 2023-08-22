//animacion de texto
$(document).ready(function() {
    let $eachWord = $('.animated-text');
    let wordCountIterator = 0;
    let mainInterval;
  
    function startAnimation() {
      resetAnimation();
      mainInterval = setInterval(stripClass, 250);
    }
  
    function resetAnimation() {
      wordCountIterator = 0;
      $eachWord.addClass('concealed');
    }
  
    function stripClass() {
      $eachWord.eq(wordCountIterator).removeClass('concealed');
      wordCountIterator++;
      if (wordCountIterator >= $eachWord.length) {
        clearInterval(mainInterval);
      }
    }
  
    $('h4').on('mouseenter', startAnimation);
  });



document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let formData = {
      name: name,
      email: email,
      message: message
  };

  fetch('https://formsubmit.co/emilianoromeroft@gmail.com', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Respuesta del servidor:', data);

      let messageOverlay = document.getElementById('alerta-envio');
      messageOverlay.style.display = 'block';

      setTimeout(function () {
          messageOverlay.style.display = 'none';
      }, 3500);
  })
  .catch(error => {
      console.error('Error al enviar los datos:', error);
  });
});

document.querySelector('.alerta-envio').addEventListener('click', function (event) {
  if (event.target.classList.contains('alerta-envio')) {
      this.style.display = 'none';
  }
});
