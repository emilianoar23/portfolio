//animacion de texto
$(document).ready(function () {
    let topText = $(".top-text").text().split("");
    let bottomText = $(".bottom-text").text().split("");

    $(".animated-text").css("font-family", "'Montserrat', sans-serif");

    $(".top-text, .bottom-text").empty();

    $.each(topText, function (i, v) {
        $(".top-text").append($("<span>").text(v));
    });

    $.each(bottomText, function (i, v) {
        $(".bottom-text").append($("<span>").text(v));
    });

    let numTopSpans = $(".top-text span").length;
    let numBottomSpans = $(".bottom-text span").length;

    for (let i = 0; i <= numTopSpans; i++) {
        $(".top-text span:nth-child(" + i + ")").css("animation-delay", i / 10 + "s");
    }

    for (let i = 0; i <= numBottomSpans; i++) {
        $(".bottom-text span:nth-child(" + i + ")").css("animation-delay", i / 10 + "s");
    }
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