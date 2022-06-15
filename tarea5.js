/* TAREA N°5 */

//SECCIÓN 1.A
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= 1000; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);

//SECCIÓN 1.B
function numerosPares() {
    for (let i = 2; i <= 1000; i = i + 2) {
      console.log("Numeros Pares: " + i);
    }
  }
  console.log(numerosPares());

//SECCIÓN 1.C
function numerosImpares() {
    for (let n = 1; n <= 1000; n = n + 2) {
      console.log("Numeros Impares: " + n);
    }
  }
  console.log(numerosImpares());


//SECCIÓN 2
let pokemones1 = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
let resultPokemones1 = pokemones1.map(element => element.toUpperCase())
console.log(resultPokemones1)


//SECCIÓN 3
let pokemones2 = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
let resultPokemones2 = pokemones2.filter(element => element.tipo === 'Fuego');
console.log(resultPokemones2);