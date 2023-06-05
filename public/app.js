import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Template Instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 40 });
// let docTwo = addUID('Hello');
console.log(docOne.age);
const docThree = {
    // const docThree: Resource = {
    uid: 1,
    resourceName: 'person',
    // data: { name: 'Shaun'} // This is fine when the resource interface has 'data: object'
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'toliet roll']
};
console.log(docThree, docFour);
