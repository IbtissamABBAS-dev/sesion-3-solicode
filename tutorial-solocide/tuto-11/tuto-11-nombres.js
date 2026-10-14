
let nombres = [4, 7, 2, 9, 5, 8];

let sommePairs = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        sommePairs = sommePairs + nombres[i];
    }
}

console.log("Somme des nombres pairs :", sommePairs);
