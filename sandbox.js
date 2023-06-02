// Arrays
var names = ['luigi', 'mario', 'yoshi'];
// names = 'hello' -> can't change the array to a simple string
names.push('toad');
// names.push(3); -> can't push a number to a string array
// names[0] = 3; -> can't change a string to a number in a string array
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); -> can't push a string to a numbers array
// numbers[1] = 'shaun'; -> can't change a number to a string in a numbers array
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; // ken is replaced by 3
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; -> can't change a property with type number to type string
// ninja.skills = ['fighting', 'sneaking']; -> can't add a new property that was not defined initially
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
    // age : 40 -> It needs to match the original structure of the object, can't change it completely without all the properties
};
