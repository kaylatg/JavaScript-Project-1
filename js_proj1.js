// Create a function double that accepts one input, multiplies it by 2 and returns the result. (3 pts.)
function double(input) {return input * 2};

// Create a function triple that accepts one input, multiplies it by 3 and returns the result. (3 pts.)
function triple(input) {return input * 3};

// Create an arrow function square that accepts one input, multiplies it by itself and returns the result. (3 pts.)
const square = input => input * input

// Create an arrow function increment that accepts one input, adds one to it and returns the result. (3 pts.)
const increment = input => ++input

/** Create a function called map that takes two inputs:
    - an array of numbers (a list of numbers)
    - a 'callback' function - a function that is applied to each element of the array
map returns a new array filled with numbers that are the result of using the 'callback' 
function on each element of the input array. (8 pts.) */
function map(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;

}

/** Create a function called forEach that takes two inputs:
    - an array of numbers (a list of numbers)
    - a 'callback' function
forEach runs the callback on each element of the array (updates the array passed in). 
forEach does not return anything. (8 pts.) */
function forEach(array, instructions) {
    for (let i = 0; i < array.length; i++) {
        array[i] = instructions(array[i]);
    }
}

// Tests: 
console.log(map([1, 2, 3], double)); // should output [ 2, 4,6  ] (2 pts.) 
console.log(map([5,10,5], triple)); // should output [ 15, 30, 15 ] (2 pts.) 
console.log(map([1,2], square)); // should output [ 1, 4 ] (2 pts.)

myarray = [2,3,4];
forEach(myarray, increment);
console.log(myarray); // should output [3, 4, 5] (3 pts.)

myarray2 = [10,20];
forEach(myarray2, square);
console.log(myarray2); // should output [100, 400] (3 pts.)