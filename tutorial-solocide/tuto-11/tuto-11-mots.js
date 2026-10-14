
let mots = ["chat", "ordinateur", "table", "programmation", "js"];

let motsLongs = 0;

for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > 5) {
        motsLongs++;
    }
}

console.log("Nombre de mots longs :", motsLongs);
