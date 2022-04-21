
const slider1=document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider_section ");
let sliderSectionLast=sliderSection[sliderSection.length-1];


const btnRight=document.querySelector("#btn-right");
const btnLeft=document.querySelector("#btn-left");

slider1.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst=document.querySelectorAll(".slider_section")[0];

    slider1.style.marginLeft="-200%";
    slider1.style.transition="all 0.5";
   
    setTimeout(function(){
        slider1.style.transition="none";
        slider1.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider1.style.marginLeft="-100%";
    }, 500);
}


function Prev(){
    let sliderSection=document.querySelectorAll(".slider_section ");
    let sliderSectionLast=sliderSection[sliderSection.length-1];

    slider1.style.marginLeft="0%";
    slider1.style.transition="all 0.5";
   
    setTimeout(function(){
        slider1.style.transition="none";
        slider1.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider1.style.marginLeft="-100%";
    }, 500);
}


btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})



const typed= new Typed('.typed', {
  strings:[
       '<i class="mascota">GATOS       <i>',
       '<i class="mascota">PERROS      <i>', 
       '<i class="mascota">TORTUGAS    <i>',
       '<i class="mascota">VETERINARIAS<i>'],
     typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});

