// IMPORTING FILE

// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// addToCart('Bread', 10);
// console.log(tp, tq);

// ShoppingCart.addToCart('Donust', 6);

// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

// import add, { addToCart, totalPrice as tp, tq } from './shoppingCart.js';

// import add, { cart } from './shoppingCart.js';

// add('Pizza', 3);
// add('Birria', 5);
// add('Mole', 14);
// add('Pozole', 10);

// console.log(cart);

console.log('Fetching...');

const solicitar = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // return data[data.lenght-1].title + ' ñ ' + data[data.lenght-1].body
    return data[99].title + data[99].body
}

// console.log('finished fetching');
// const data = solicitar();
// console.log(data.then((last) => console.log(last)));

const lastPost = await solicitar()
console.log(lastPost)
