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

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        // doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    } else {
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');

});

// Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// let tup: [string, number, boolean] = [40, 'hello', true]; // Gonna get an error because the positions value do not match the type of the tup
tup[0] = 'ken';
tup[1] = 30;

// Example where we might use a Tuple
let student: [string, number];
//student = [223423, 'ken']; string must be first, and the number must be second
student = ['chun-li', 223423];