import faker from "faker";

const cartHtml = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector("#cart-root").innerHTML = cartHtml;
