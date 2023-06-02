"use strict";
// Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount}€ for ${this.details}`;
    }
}
const invOne = new Invoice("Mario", "work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "work on the Luigi Website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Yoshi";
invTwo.amount = 400;
console.log(invOne, invTwo);
console.log(invoices);
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
