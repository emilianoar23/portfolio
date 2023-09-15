//rotacion de skills
$('.icons img').mouseenter(function () {
  if (!$(this).hasClass('rotate-horizontal')) {
    $(this).addClass('rotate-horizontal');
    setTimeout(() => {
      $(this).removeClass('rotate-horizontal');
    }, 1000);
  }
});

//animacion de texto contacto
$(document).ready(function () {
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

function onSubmit(token) {
  document.getElementById("contact-form").submit();
}

//hero section
const particlesConfig = {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

particlesJS("particles-js", particlesConfig);

const stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

const countParticles = document.querySelector('.js-count-particles');
const update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);