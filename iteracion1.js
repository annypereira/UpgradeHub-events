// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const eventC = (event) => {
    console.log('Has hecho click', event);
};

document.getElementById('btnToClick').addEventListener("click", eventC);


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const eventF = (event1) => {
    console.log(event1.target.value);
};

document.querySelector('.focus').addEventListener('focus', eventF);


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input

const eventI = (event2) => {
    console.log(event2.srcElement.value);
}

document.querySelector('.value').addEventListener('input', eventI);