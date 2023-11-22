// ESERCIZIO 1
let number = 100;
console.log(number);

// ESERCIZIO 2
const pi = 3.14;
console.log(pi);

// ESERCIZIO 2/B
// ERRORE
// pi = 31416
// console.log(pi)

// ESERCIZIO 2/C
let radius = 8;
let circle = radius * 2 * pi;
console.log(circle);

// ESERCIZIO 3
let name = "Carlo";
name = "Marco";
console.log(name);

// ESERCIZIO 4
let greet = "Ciao Mondo!";
console.log(greet);

// ESERCIZIO 4/B
// ERRORE
// let greet = "Come stai, Mondo?"
// console.log(greet);

// ESERCIZIO 4/C
// METODO 1
// greet = `${greet} Come stai?`;
// console.log(greet);

// METODO 2
greet = greet+" "+"Come stai?";
console.log(greet);


// ESERCIZIO 5
let num_a = 8;
let num_b = 4;

let comparison;

if (num_a > num_b){
    comparison = num_a;
}
else{
    comparison = num_b;
}

console.log(comparison);

// ESERCIZIO 6
let string_a = 8;
let string_b = 4;

let comparison_2;

if (num_a === num_b) {
    comparison_2 = "Le stringhe sono uguali";
}
else {
    comparison_2 = "Le stringhe sono diverse";
}

console.log(comparison_2);

// ESERCIZIO 7
let valore_1 = 8;

let comparison_3 = true;

if (valore_1 == "8") {
    comparison_3 = true;
}
else {
    comparison_3 = false;
}

console.log(comparison_3);