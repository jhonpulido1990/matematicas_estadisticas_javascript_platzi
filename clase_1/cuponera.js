const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const arrayUObjecto = undefined; // ['cupones': descuento] {}?
const dictionary = {
    "JuanDC_es_Batman": 30,
    'no_le_digas_a_nadie': 25
}

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount;

  if (coupon in dictionary) {
    discount = dictionary[coupon]
  }else{
    pResult.innerText = 'El cupón no es válido';
    return;
  }
  
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
