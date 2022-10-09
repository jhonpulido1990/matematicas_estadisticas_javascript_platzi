console.group('Cuadrado')
const ladocuadrado = 5;
const perimetrocuadrado = 4 * ladocuadrado;
const areacuadrado = ladocuadrado ** 2;

console.log({
    ladocuadrado,
    perimetrocuadrado,
    areacuadrado
});

function calcularcuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}
console.groupEnd('Cuadrado')
console.group('Triangulo')
const lado1_triangulo = 6;
const lado2_triangulo = 6;
const base_triangulo = 4;
const altura_triangulo = 5.5;

const perimetro_triangulo = lado1_triangulo + lado2_triangulo + base_triangulo
const area_triangulo = (base_triangulo * altura_triangulo) / 2

function calculartriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base *  altura) / 2
    }
}

console.log({
    lado1_triangulo,
    lado2_triangulo,
    base_triangulo,
    altura_triangulo,
    perimetro_triangulo,
    area_triangulo
})
console.groupEnd('Triangulo')
