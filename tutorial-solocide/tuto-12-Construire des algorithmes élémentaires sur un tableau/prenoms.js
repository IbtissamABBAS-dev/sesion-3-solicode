let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];

let position = -1;

for (let i = 0; i < prenoms.length; i++) {
    if (prenoms[i] === "Nadia") {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log("Nadia se trouve à l'index", position);
} else {
    console.log("Prénom introuvable");
}