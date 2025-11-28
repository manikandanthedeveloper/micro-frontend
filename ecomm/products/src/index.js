import faker from "faker";

let products = "";
products += "<ul>";
for (let i = 0; i <= 5; i++) {
	products += `<li>${faker.commerce.productName()}</li>`;
}

products += "</ul>";

document.querySelector("#ecom-root").innerHTML = products;
