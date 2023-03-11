// Contar cuantas veces se repite una palabra //

function contarPalabrasFrase(frase) {
    frase = frase.replace(/^\s*|\s*$/gi, '');
    frase = frase.replace(/[ ]{2,}/gi, ' ');
    frase = frase.replace(/\n /, '\n');

    return frase.split(' ').length;
}
let texto = '     Hola mi nombre es justin hola justin soy mondongo mondongo el ingeniero ? si exactamente el ingeniero mondongo ';
console.log(texto);
console.log(texto.length);

console.log()

let resultado = contarPalabrasFrase(texto);
console.log(resultado);