// const funcion2 = funcion (){}
/* function funcion3 () {} */

const funcionPrueba = () => {
    console.log("hola")
    return "hola"
}

const resultado = funcionPrueba ()
console.log("Esta es la variable resultado: " , resultado)

//el retorno de una funcion detiene su ejecucion

//Parametro const funcion1 = (saludo)
//Argumento funcion1 ("hola soy un argumento")


const funcion1 = (n) => {
    //condicion de salida
    if (n > 100) return
    console.log(n)
    funcion1(n + 1)
}
// funcion1(1) ejecucion del ejercicio.
//console.log("Esta es la variable resultado: " , resultado)

let n = 100;
// = : ASIGNACION
// == : COMPARACION
// === : COMPARACION DE TIPO
// TYPE COERTION:
// AND &&
// OR ||
if (n === 30){
console.log("Esta es la variable n y tiene un valor de 30 ")
} else if (n === 100){
    console.log("Esta es la variable n y tiene un valor de 100 ") 
} else{
    console.log("Esta es la variable n y tiene un valor de 30 y 100 ") 
}
if (n === 30){
    console.log("30")
    }  else{
        console.log("Esta es la variable n y tiene un valor de 30 y 100 ") 
    }
n === 30 ? console.log("30") : console.log("distinto a 30 y 100");


console.time("ciclo for")
//CONDICION INICIAL (creacion de variable) + CONDICION + OPERACION
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.timeEnd("ciclo for")

const numeros = [1,2,3,4,5,6,7,8,9,10];
for (numero of numeros) {
    console.log("numeros", numero);
}

// FOR OF 
const personas = [
    {nombre: "juan", edad:20 },
    {nombre: "ana", edad:20 },
    {nombre: "pedro", edad:40 },
    {nombre: "kao", edad:34 }
]
for(let persona of personas){
    console.log("persona", persona)
}
