/* FUNCION RECURSIVA */

/* EJERCICIO A */
/* for(let i = 0;i <= 100; i++){
    console.log(i);
} */
const funcion1 = (n) => {
    //condicion de salida
    if (n > 100) return
    console.log(n)
    funcion1(n + 1)
}
funcion1()

/* EJERCICIO B */
/* for(let i = 1000 ;i >= 500; i--){
    console.log(i);
} */
const funcion2 = (n) => {
    //condicion de salida
    if (n = 1000 , n < 500) return
    console.log(n)
    funcion2(n - 1)
}
funcion2()

/* PROMEDIO */
function Promedio(promedioTotal) {
    var i = 0, summ = 0, ArrayLen = promedioTotal.length;
    while (i < ArrayLen) {
        summ = summ + promedioTotal[i++];
}
    return summ / ArrayLen;
}
var promedioTotal = [6,8,9,2,5,10];
var a = Promedio(promedioTotal);
console.log(a)