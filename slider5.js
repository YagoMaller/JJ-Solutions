// js/sliderModule.js
import { services } from './servicesdata.js';

let index = 0;
let autoMover = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1) Inyectar tarjetas
  const container = document.querySelector('.servicios.carrusel');
  services.forEach(({ title, image }) => {
    const servicio = document.createElement('div');
    servicio.classList.add('servicio', 'itemCarrusel');
    servicio.innerHTML = `
      <div class="contimg">
        <img class="imgServicio" src="${image}" alt="${title}">
      </div>
      <div class="descServicio">
        <h2>${title.replace(' ', '<br>')}</h2>
        <div style="width: 50px;"></div>
      </div>
    `;
    container.appendChild(servicio);
  });

  // 2) Variables del carrusel
  const items        = document.querySelectorAll('.itemCarrusel');
  const totalItems   = items.length;
  const itemsVisibles= 3;

  // 3) Funciones de control
  function actualizarChevron() {
    document.querySelector('.chevron.left').src  = index > 0                             ? 'img/chevron.png'     : 'img/chevrongrey.png';
    document.querySelector('.chevron.right').src = index < totalItems - itemsVisibles ? 'img/chevron.png'     : 'img/chevrongrey.png';
  }

  window.moverCarrusel = direccion => {
    if (direccion === 'derecha' && index < totalItems - itemsVisibles) index++;
    else if (direccion === 'izquierda' && index > 0)                    index--;
    actualizarChevron();
    const offset = -100 * index;
    items.forEach(item => item.style.transform = `translateX(${offset}%)`);
  };

  window.stopAutoMover = () => {
    if (autoMover) clearInterval(autoMover);
    items.forEach(item => item.style.transition = 'transform 0.3s linear');
    autoMover = null;
  };

  window.startAutomover = () => {
    if (!autoMover) {
      autoMover = setInterval(() => window.moverCarrusel('derecha'), 3000);
    }
  };

  // 4) Ajuste de tipografía si el texto es muy ancho
  items.forEach(serv => {
    const h2 = serv.querySelector('h2');
    if (h2.offsetWidth > 30) h2.style.fontSize = '1.2em';
  });

  // 5) Inicializamos el autoscroll
  startAutomover();
});
