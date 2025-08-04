




// Abrir menu principal
document.getElementsByClassName('btnMenu')[0].addEventListener('click', function() {
    document.getElementsByClassName('menuPrincipal')[0].classList.toggle('visible');
    setTimeout(() => {
        document.getElementsByClassName('menuPrincipal')[0].classList.toggle('activo');
        document.getElementsByClassName('btnMenu')[0].classList.toggle('activo')
    }, 10);
    
  });




// Resize el banner principal
  window.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.banner img.active');
    var container = document.querySelector('.banner');


    function adjustImageSize() {
      var imageAspect = image.naturalWidth / image.naturalHeight;
      var containerAspect = container.offsetWidth / container.offsetHeight;

      if (containerAspect < imageAspect) {
        image.style.width = 'auto';
        image.style.height = '100%';
      } else {
        image.style.width = '100%';
        image.style.height = 'auto%';
      }

    }

    adjustImageSize();

    window.addEventListener('resize', function() {
      adjustImageSize();
    });
  });




 // Scroll entre secciones
 let scrolled = 0;
 window.addEventListener('scroll',function(){
  let elementoHeader = document.getElementById('header');
  if (window.scrollY > 1 && scrolled == 0) {
    elementoHeader.classList.remove('seccionActiva');
/*
    elementoHeader.children[0].classList.add('fadeout');
    setTimeout(() => {
      elementoHeader.children[0].classList.remove('fadeout');
    }, 500);
*/

    scrolled = 1;
  } else if (window.scrollY <= 1) {
    elementoHeader.classList.add('seccionActiva');

    scrolled = 0;
  }
 });
/*
 const sections = document.querySelectorAll('section');
document.getElementById('header').scrollIntoView({ behavior: 'smooth' });

 window.addEventListener('wheel', (event) => {
  const delta = Math.sign(event.deltaY);
  const currentSection = seccionActual();
  let nextSection;
  if (delta > 0) {
    nextSection = currentSection.nextElementSibling;
    if (nextSection && nextSection.tagName === 'SECTION') {
      window.scrollTo(0,nextSection.offsetTop,'smooth');
      currentSection.classList.remove("seccionActiva");
      nextSection.classList.add("seccionActiva");
    }

  } else if (delta < 0) {
    nextSection = currentSection.previousElementSibling;
    if (nextSection && nextSection.tagName === 'SECTION') {
      window.scrollTo(0,nextSection.offsetTop,'smooth');
      currentSection.classList.remove("seccionActiva");
      nextSection.classList.add("seccionActiva")
    }
  }
});
*/



function seccionActual() {
  let seccionActual;
  sections.forEach((section) => {
    if (section.classList.contains('seccionActiva')) {
      seccionActual = section;
    }
  });
  return seccionActual;
}

//ajusta el tamano del menu lateral con el icono del menu

var distanciaIcono = document.getElementById('btnMenu').getBoundingClientRect().left;
var anchoMenu = screen.width - distanciaIcono + 25;
document.getElementById("menuPrincipal").style.width = anchoMenu + "px";