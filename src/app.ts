// Interfaces
interface IsPerson {
    name:  string;
    age:  number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

let someone: IsPerson; // Forcing the variable to follow the Interface structure
const greetPerson = (person: IsPerson) => {  // We can only pass an Object that matches the 'person' interface
    console.log('Hello ', person.name);
}

// greetPerson({name: 'Shaun'}); Gonna get an error because it does not match the 'IsPerson' interface
greetPerson(me); // It matches the IsPerson interface, so it returns what the function does, in this case it's the console.log()

console.log(me);


import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice("Mario", "work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "work on the Luigi Website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value, 
        toFrom.value, 
        details.value, 
        amount.valueAsNumber
    );
});