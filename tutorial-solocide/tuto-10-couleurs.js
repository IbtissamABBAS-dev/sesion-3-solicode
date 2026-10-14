let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

// Afficher les couleurs à l'envers
for (let i = couleurs.length - 1; i >= 0; i--) {
    console.log(couleurs[i]);
}

console.log("Couleurs aux index pairs :");

// Afficher les couleurs aux index 0, 2 et 4
for (let i = 0; i < couleurs.length; i = i + 2) {
    console.log(couleurs[i]);
}