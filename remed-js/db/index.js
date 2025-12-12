import * as core from './core.js';
import * as products from './products.js';

console.log(core.f1());
console.log(products.f1());

const f1 = () => `
CORE: ${core.f1()}
PRODUCTS: ${products.f1()}
`

export {f1}