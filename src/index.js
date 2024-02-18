import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts } from "./requests/products"; // http requests
import { markupAllProducts } from "./services/markupService"; // Products markup fucntion
// Завдання 1.
// Створи функцію для отримання інформації про всі продукти з подальшим рендером списку.
const allProducts = document.querySelector("#allProducts");

fetchAllProducts().then(console.log)// debug backend

fetchAllProducts().then(({ data: { products } }) => {
    const markupCartsProducts = markupAllProducts(products);
    allProducts.insertAdjacentHTML('beforeend', markupCartsProducts);
});
