import faker from "faker";

const mount = (el) => {
	let products = "";
	products += "<ul>";
	for (let i = 0; i <= 5; i++) {
		products += `<li>${faker.commerce.productName()}</li>`;
	}

	products += "</ul>";

	el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#ecom-root");

	if (el) {
		mount(el);
	}
}

export { mount };
