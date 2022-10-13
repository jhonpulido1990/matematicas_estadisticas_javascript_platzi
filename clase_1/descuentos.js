const inputprice = document.querySelector('#price');
const inputdiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const presult = document.querySelector('#result');

btn.addEventListener('click', calcularpreciodescuento)

function calcularpreciodescuento(){
    const price = inputprice.value;
    const discount = inputdiscount.value;

    if (!price || !discount) {
        presult.innerText = 'por favor llenar los espacios';
        return;
    }

    if (discount >= 100) {
        presult.innerText = 'el descuento es igual o se excede del 100%';
        return;
    }

    const newprice = (price * (100 - discount) / 100);
    presult.innerText = 'el nuevo precio con el descuento es $' + newprice;
}
