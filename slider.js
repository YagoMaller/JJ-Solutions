let index = 0;
const items = document.querySelectorAll('.itemCarrusel');
const totalItems = items.length;
const itemsVisibles = 3;


let autoMover = null;

function moverCarrusel(direccion) {
    if (direccion === 'derecha') {
        if (index < totalItems - itemsVisibles) {
            index++;
            document.querySelector('.chevron.left').src = "img/chevron.png"
            if (index == totalItems - itemsVisibles) {
                document.querySelector('.chevron.right').src = "img/chevrongrey.png";
            }
        }

    } else {
        if (index > 0) {
            index--;
            document.querySelector('.chevron.right').src = "img/chevron.png";
            if (index == 0) {
                document.querySelector('.chevron.left').src = "img/chevrongrey.png";
            }
        }
    }

    const offset = -100 * index;

    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}





function startAutomover(){
    if(!autoMover){
        autoMover = setInterval(() => moverCarrusel('derecha'), 3000);
        
    }
}    
function stopAutoMover() {
    if (autoMover) {
        clearInterval(autoMover);
        autoMover = null;
    }
}   

startAutomover();

let ServiceTexts = document.querySelectorAll('.descServicio h2');
ServiceTexts.forEach(servicio => {
    if (servicio.offsetWidth > 30) {
        servicio.style.fontSize = '1.2em';
    }

});


