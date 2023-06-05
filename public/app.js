const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
let someone; // Forcing the variable to follow the Interface structure
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
// greetPerson({name: 'Shaun'}); Gonna get an error because it does not match the 'IsPerson' interface
greetPerson(me); // It matches the IsPerson interface, so it returns what the function does, in this case it's the console.log()
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("Mario", "work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "work on the Luigi Website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
