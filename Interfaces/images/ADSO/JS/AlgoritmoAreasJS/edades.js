 /*para ver el funcionamiento del codigo es necesario abrir el archivo edades.html en el navegador.
 Dar clic en inspeccionar y luego seleccionar la pestaña de consola*/

function perimetroTriangulo(lado_a, base, lado_c) {
    return lado_a + base + lado_c;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

function perimetroRectangulo(base, altura) {
    return (base+altura)*2;
}

function areaRectangulo(base, altura) {
    return base*altura;
}

function perimetroCuadrado(altura) {
    return altura*4;
}

function areaCuadrado(altura) {
    return altura**2;
}

function perimetroCirculo(radio) {
    return 2*3.14*radio;
}

function areaCirculo(radio) {
    return 3.14*(radio**2);
}

console.log('El perímetro del triángulo es de: ', perimetroTriangulo(4, 6, 5));
console.log('El área del triángulo es de: ', areaTriangulo(6, 7));
console.log('El perímetro del rectángulo es de: ', perimetroRectangulo(5, 7));
console.log('El área del rectángulo es de: ', areaRectangulo(5, 7));
console.log('El perímetro del cuadrado es de: ', perimetroCuadrado(6));
console.log('El área del cuadrado es de: ', areaCuadrado(6));
console.log('El perímetro del círculo es de: ', perimetroCirculo(4));
console.log('El área del círculo es de: ', areaCirculo(4));