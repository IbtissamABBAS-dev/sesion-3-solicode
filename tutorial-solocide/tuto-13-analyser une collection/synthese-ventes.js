
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// 1. Initialisation
let somme = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let sommeExceptionnelles = 0;

// 2. Traitement : une seule boucle
for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    // Calculer le chiffre d'affaires total
    somme = somme + vente;

    // Chercher la vente maximale
    if (vente > max) {
        max = vente;
    }

    // Chercher la vente minimale
    if (vente < min) {
        min = vente;
    }

    // Vérifier si la vente est exceptionnelle
    if (vente >= 130) {
        nbExceptionnelles++;
        sommeExceptionnelles = sommeExceptionnelles + vente;
    }
}

// 3. Affichage des résultats
console.log("Nombre total de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA des ventes exceptionnelles :", sommeExceptionnelles);
