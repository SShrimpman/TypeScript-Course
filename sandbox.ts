// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi';
age = 30;

//isLoggedIn = 25;
isLoggedIn = true;

// Arrays
// let ninjas: string[];
 let ninjas: string[] = []; // -> It's better to initialize it with '= []', that way it knows it is an empty string and
//                               i can use the 'push' method to increment a string to the array, without it, it would give an error

// ninjas = ['yoshi', 'mario']
ninjas.push('shaun')

// Union Types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

// Objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' }