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
        area: (base * altura) / 2
    }
}

function calcularalturatriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('este no es un triangulo isosceles')
    } else {
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
    }
}
/*
Altura de un triángulo escaleno si es que conocemos todos sus lados
Cuando conocemos las longitudes de todos los lados del triángulo, podemos calcular la altura usando una fórmula que es derivada de la fórmula de Herón, la cual es usada para calcular el área:

h = 2/a raiz( S(S - a)(S - b)(S - c))
 
en donde,

a, b, c son las longitudes de los lados del triángulo
S es el semiperímetro, el cual es igual a S = (a + b + c) / 2
 
h es la altura perpendicular a la base
*/
function trianguloescalenoaltura(lado1, lado2, base) {
    if (lado1 == lado2 || lado2 == base || lado1 == base) {
        console.warn('triangulo no es escaleno');
    } else {
        const S = ((lado1 + lado2 + base) / 2)
        return (2 / base) * Math.sqrt(S * (S - base) * (S - lado1) * (S - lado2))
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

console.group('Circulo');
const radiocirculo = 3;
const diametro = radiocirculo * 2;
// const PI = 3.1415;

const circunferencia = diametro * Math.PI;
const areacirculo = (radiocirculo ** 2) * Math.PI

function calcularcirculo(radio) {
    const diametr = radio * 2;
    const radiocuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametr * Math.PI,
        area: radiocuadrado * Math.PI
    }
}

console.log({
    radiocirculo,
    diametro,
    PI,
    circunferencia,
    areacirculo
})
console.groupEnd('Circulo');
