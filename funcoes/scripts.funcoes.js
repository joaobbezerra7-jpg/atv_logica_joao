import { calculoPercentual } from "../calculos/script_calculos.js";


// function soma(a,b) {
//     return a + b
// }

// console.log(soma(20,30));


// const teste = function (a,b) {
//     return a*b;
// }

// console.log(teste(3,6));

// const multi = (a,b) => a*b;
// console.log(multi(5,8));

// const multi2 = (a,b) => {
//     return a*b
// }
// console.log(multi2(2,7));

// setTimeout(() => {
//     console.log("após 5 seg");
// }, 5000);


// const intervalo = setInterval(() => {
//     let cont = 0;
//     console.log("joão");

//     if (cont === 5) {
//         clearInterval(intervalo)
//     }
// }, 2000);

// const numSorteio = document.querySelector("#div-num-sorteio");

// let contVolta = 0, numSorteado = 0, contPar = 0, contImpar = 0

// const sorteio = setInterval(() => {
//     contVolta++

//     numSorteado = parseInt(Math.random() * 60)

//     console.log(`${contVolta}º número gerado ${numSorteado}`);

    

//     if (numSorteado % 2 === 0) {
//         contPar++
//     } else {
//         contImpar++
//     }

//     numSorteio.innerHTML += `${contVolta}º número gerado: ${numSorteado} - ${numSorteado % 2 == 0 ? 'PAR' : 'ÍMPAR'}<br>`;


//     if (numSorteado === 6) {
//         console.log("sorteio encerrado");

//         numSorteio.innerHTML += ` O total de números gerados é ${contVolta} <br>
// O total de números pares é ${contPar}<br>
// O total de numeros impares é ${contImpar}
// `;

//         clearInterval(sorteio)
//         contVolta = 0
//         numSorteado = 0

//     }


// }
//     , 2000)







