$(document).ready(function () {
    var animatedText = $(".animated-text").text().split("");
    $(".animated-text").empty();

    $.each(animatedText, function (i, v) {
        $(".animated-text").append($("<span>").text(v));
    });

    var numSpans = $(".animated-text span").length;
    for (i = 0; i <= numSpans; i++) {
        $(".animated-text span:nth-child(" + i + ")").css("animation-delay", i / 10 + "s");
    }
});

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