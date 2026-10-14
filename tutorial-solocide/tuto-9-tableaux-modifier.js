let notes = [12, 8, 15, 9, 17];

// Modifier la deuxième note
notes[1] = 10;

// Modifier la quatrième note
notes[3] = 11;

// Afficher la première note
console.log("Première note :", notes[0]);

// Afficher la dernière note
console.log("Dernière note :", notes[notes.length - 1]);

// Afficher le tableau final
console.log("Tableau final :", notes);

// Afficher le nombre total de notes
console.log("Nombre de notes :", notes.length);

// Différence : notes[2] permet de lire la valeur,
// tandis que notes[2] = 10 remplace cette valeur par 10