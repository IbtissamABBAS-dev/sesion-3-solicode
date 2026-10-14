
let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let nombreChers = 0;
let sommeChers = 0;

/*
La variable somme doit être déclarée avant la boucle
pour conserver le total et l'accumuler à chaque itération.
Si elle est déclarée à l'intérieur de la boucle,
elle sera réinitialisée à chaque tour.
*/

for (let i = 0; i < panier.length; i++) {
    somme = somme + panier[i];

    if (panier[i] >= 20) {
        nombreChers++;
        sommeChers = sommeChers + panier[i];
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nombreChers);
console.log("Montant des articles chers :", sommeChers);
