const h1 = document.querySelector('h1');
const form = document.querySelector('form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult = document.querySelector('#result');

form.addEventListener('submit', btnonclick)

function btnonclick(event){
    console.log({event});
    event.preventDefault(); // no recarga la paguina
    console.log(Number(input1.value) + Number(input2.value));
    const descuento = Number(input1.value) * ((100 - Number(input2.value)) / 100);
    presult.innerHTML = "Precio con descuento: " + descuento;
}
