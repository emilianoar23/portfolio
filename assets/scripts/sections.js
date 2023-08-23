//animacion seccion de skills
$(document).ready(function() {
  $('.skills img').hover(function() {
      $(this).css('transform', 'rotateY(360deg)');
  }, function() {
      $(this).css('transform', 'rotateY(0deg)');
  });
});

//animacion de texto contacto
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


//formulario
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function () {
      let messageOverlay = document.getElementById('alerta-envio');
      messageOverlay.style.display = 'block';

      setTimeout(function () {
          messageOverlay.style.display = 'none';
      }, 3500); // Ocultar después de 3.5 segundos
  });
});