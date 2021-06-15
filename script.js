/* let numero =0;
let input;
 */
/* for(let i=0;i<5;i++) { //EJEMPLO DE FOR
    console.log(i);
} */

/* while (numero<5){ //EJEMPLO DE WHILE
    console.log(numero);
    numero += 1;
} */

/* while (input !== "no"){
    input = prompt("Ingrese una palabra");
} */

// 1) Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10).

/* let numero=0

for(let i=0;i<=10;i++){
    alert(i);
} */

// 2) Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

/* let numero;
let suma=0;

for(let i=0;i<5;i++){
    numero = parseInt(prompt("Ingrese un número"));
    console.log("Iteración n: "+i+" Valor de número: "+numero);
    suma = suma+numero;
    console.log("Iteración n: "+i+" Valor de suma: "+suma);
}

alert(suma);
 */

// 3) Solicitar al usuario que indique cuántos números quiere ingresar y mostrar 
// el resultado de la suma de ellos.

/* let numero;
let suma=0;
let cantidad = parseInt(prompt("Ingrese un número que represente la cantidad de números que desea sumar"));
console.log(cantidad);
for(let i=0;i<cantidad;i++) {

    numero = parseInt(prompt("Ingrese un número"))
    suma = suma + numero;

}
alert(suma); */


// 4) Solicitar al usuario que ingrese números hasta que desee y 
// luego mostrar la suma de ellos.


/* let input;
let suma=0;

while (input !== 0) {
    input = parseInt(prompt("Ingrese un número. (recuerde que puede apretar la tecla 0 para finalizar)"));
    suma = suma + input;
    console.log(input);

}
alert(suma); */

// 5) Solicitar al usuario que ingrese tantos números como desee y 
// luego mostrar el promedio de ellos.

/* let input;
let suma=0;
let contador=0;
while (input !== 0) {
    input = parseInt(prompt("Ingrese un número. (recuerde que puede apretar la tecla 0 para finalizar)"));
    suma = suma + input;
    contador = contador+1;
}
alert(suma/(contador-1)); */

// 6) Realizar un programa que pida al usuario un número y 
// muestre los números del 1 al número introducido. 

/* let numero= parseInt(prompt("Ingrese un número"));


for(let i=1;i<=numero;i++){
    alert(i);
} 
  */

// 7) Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) 
// Aceptar solo enteros. 

/* let i = parseInt(prompt("Ingrese el número desde el que comienza el conteo"));
let final = parseInt(prompt("Ingrese el número para finalizar el conteo"));

for(i; i<=final; i++){
    alert(i);
}  */

//
  
// 8) Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.

/* let mayor = 0
let numero;
let cantidad = parseInt(prompt("Ingrese un número que represente la cantidad de números que desea ingresar"));
console.log(cantidad);

for(let i=0;i<cantidad;i++) {
    numero = parseInt(prompt("Ingrese un número"));

    if (numero > mayor) {
        mayor = numero;
    }
}

alert(mayor); */

// 9) Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.

/* let menor = 0
let numero;
let cantidad = parseInt(prompt("Ingrese un número que represente la cantidad de números que desea ingresar"));
console.log(cantidad);

for(let i=0;i<cantidad;i++) {
    numero = parseInt(prompt("Ingrese un número"));
    if (! numero < menor) {
        menor = numero;
        
    }
    
}
min = Math.min(numero)
alert(min);
alert(menor); */

/* for(var i=0; i > 25; i+=1){
    console.log(i);
}
 */


/* let x = parseInt(prompt("Ingrese un número")); // CÓMO USAR MATH.MIN PARA BUSCAR EL VALOR MÁS BAJO.
let y = parseInt(prompt("Ingrese otro número"));
var z = Math.min(x, y);
alert(z); */



let check = true;
let sum = 0;

while (check) {
    let option = parseInt (prompt ("Ingrese una opción " + "\n" + "1) Cobrar" + "\n" + "2) Retirar dinero de caja" + "\n" + "3) Ver balance de caja " + "\n" + "4) Ver montos totales de las operaciones realizadas" + "\n" + "5) Salir"));


    switch (option) {

    case 1:
        
    let i = 1;
    while (i !== 0) {
        let precios = parseInt (prompt ("Ingrese los precios de los productos" + "\n" + "para salir ingrese el número '0'"));
        sum = sum + precios;

        if (precios === 0) {
            i = 0;
            alert("El valor total de sus compras es de: " + sum);
            let pagar = prompt("¿Desea abonar con tarjeta o con efectivo?");

            if (pagar === "efectivo" && sum > 2000 && sum < 5000) {
                let descuento = (sum*0.05);
                let valordescuento = sum - descuento;
                alert("El total a abonar en efectivo es de: $" + valordescuento);
                let consultar = parseInt(prompt("¿Con cuánto desesa abonar?"));
                let vuelto = (consultar - valordescuento);
                alert("Su vuelto es: $" + vuelto);
                
            } else if (sum > 5000) {
                let descuento = (sum * 0.1);
                let valordescuento = sum - descuento;
                alert("El total a abonar es de: $" + valordescuento);
            }
        } 
        
    } sum = 0;

    break

    case 2:
        break;

    case 3:
        break;
    
    case 4:
        break;

    case 5:
        break;

    }

}