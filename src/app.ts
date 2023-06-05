import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List Template Instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    
    list.render(doc, type.value, 'end');
});

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Yoshi', age: 40});
// let docTwo = addUID('Hello');

console.log(docOne.age);

// With Interfaces
interface Resource<T> {
// interface Resource {
    uid: number;
    resourceName: string;
    data: T;
    // data: object
}

const docThree: Resource<object> = {
// const docThree: Resource = {
    uid: 1,
    resourceName: 'person',
    // data: { name: 'Shaun'} // This is fine when the resource interface has 'data: object'
    data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'toliet roll']
}

console.log(docThree, docFour);