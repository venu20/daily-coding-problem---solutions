// Import stylesheets
import './style.css';
import './steps.js';
// import { Trie } from './autocomplete.js';
// import './job_scheduler.js';
// import './array_product.js';
// import './closures.js';
import './air_bnb.js';
import './microsoft.js';
// import './linkedList.js';
// import './fib.js';
// import './amazon.js';
// import './google.js';
import { clickMe } from './debounce.js'
// Write Javascript code!
const appDiv = document.getElementById('app');
let counter = 1;
document.addEventListener('click', () => {
  counter++;
  clickMe(counter,'counter coming');
});
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
// appDiv.innerHTML = `<h3>${JSON.stringify(unique(55))}</h3>`;

// appDiv.innerHTML = `<h3>${JSON.stringify(autocomplete('dr',predict.split(',')))}</h3>`;
// appDiv.innerHTML = `<h3>${JSON.stringify(Autocomplete('dr',predict.split(',')))}</h3>`;