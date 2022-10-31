console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n=========\n");

// for (let counter = 1; counter <= 100; counter++) {
//     if (counter % 2 == 1) {
//         console.log(counter);        
//     } else {
//         continue;
//     }
// }   

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// for (let counter = 1; counter <= 100; counter++) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (counter % 5 === 0) {
//         console.log("buzz");
//     } else if (counter % 3 === 0) {
//         console.log("fizz");
//     } else {
//         console.log(counter)
//     }
// }

console.log("EXERCISE 3:\n==========\n");

// let counter = 0

// while (counter <= 100) {
//     counter++
//     if (counter % 2 == 1) {
//         console.log(counter);        
//     } else {
//         continue;
//     }
// }

// let counter = 0
// do {
//     counter++
//     if (counter % 2 == 1) {
//         console.log(counter);        
//     } else {
//         continue;
//     }
// } while (counter <= 100);


// while (counter <= 100) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (counter % 3 === 0) {
//         console.log("fizz");
//     } else if (counter % 5 === 0) {
//         console.log("buzz")
//     }
//     counter++
// }


// let counter = 1

// do {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (counter % 3 === 0) {
//         console.log("fizz");
//     } else if (counter % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log(counter);
//     }
//     counter++
// } while (counter <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let value = 0; value <= n; value++) {
    if (value !== n) {
        console.log("Did not find value");
        console.log(n);
        console.log(value);
    } else if (value === n) {
        console.log("Found value!");
        console.log(value);
    }
    
}