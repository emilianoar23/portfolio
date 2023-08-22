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


//formulario
document.querySelector('.alerta-envio').addEventListener('click', function (event) {
  if (event.target.classList.contains('alerta-envio')) {
      this.style.display = 'none';
  }
});
