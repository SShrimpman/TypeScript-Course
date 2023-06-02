// Explicit Types
var character;
var age;
var isLoggedIn;
//age = 'luigi';
age = 30;
//isLoggedIn = 25;
isLoggedIn = true;
// Arrays
// let ninjas: string[];
var ninjas = []; // -> It's better to initialize it with '= []', that way it knows it is an empty string and
//                               i can use the 'push' method to increment a string to the array, without it, it would give an error
// ninjas = ['yoshi', 'mario']
ninjas.push('shaun');
// Union Types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// Objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
