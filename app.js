console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n=========\n");

for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 == 0) {
        console.log(counter);        
    } else {
        continue;
    }
}   

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let counter = 1; counter <= 100; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("fizzbuzz");
    } else if (counter % 5 === 0) {
        console.log("buzz");
    } else if (counter % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(counter)
    }
}

