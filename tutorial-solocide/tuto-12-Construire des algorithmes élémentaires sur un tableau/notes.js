
let notes = [12, 17, 9, 14, 18, 11];

let maximum = notes[0];
let minimum = notes[0];
let positionMax = 0;
let positionMin = 0;

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
        positionMax = i;
    }

    if (notes[i] < minimum) {
        minimum = notes[i];
        positionMin = i;
    }
}

console.log("Meilleure note :", maximum);
console.log("Index du maximum :", positionMax);

console.log("Pire note :", minimum);
console.log("Index du minimum :", positionMin);
