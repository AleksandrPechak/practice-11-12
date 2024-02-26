import "./styles/normalize.css";
import "./styles/index.css";
import {
  fetchAllProducts,
  getProductId,
  addProduct,
} from "./requests/products"; // http requests
import {
  markupAllProducts,
  markupProductId,
  markupProductAdd,
} from "./services/markupService"; // Products markup fucntion

// Завдання 1.
// Створи функцію для отримання інформації про всі продукти з подальшим рендером списку.
const allProducts = document.querySelector("#allProducts");

fetchAllProducts().then(console.log); // debug backend

fetchAllProducts().then(({ data: { products } }) => {
  const markupCartsProducts = markupAllProducts(products);
  allProducts.insertAdjacentHTML("beforeend", markupCartsProducts);
});
// Завдання 2.
// Реалізуй пошук і рендер інформації про продукт по його ID.
const singleProductForm = document.querySelector("#singleProductForm");
const singleProduct = document.querySelector("#singleProduct");
singleProductForm.addEventListener("submit", findProductById);

function findProductById(e) {
  e.preventDefault();
  const productId = e.target.elements.id.value;
  // getProductId(productId).then(console.log);
  getProductId(productId).then(({ data }) => {
    const markupProductCart = markupProductId(data);
    singleProduct.innerHTML = markupProductCart;
    singleProductForm.reset();
  });
}

// Завдання 3.
// Створи і отрендери новий продукт.
//додай завдання
const newProductSection = document.querySelector("#newProductSection");
const newProductForm = document.querySelector(".newProductForm");
newProductForm.addEventListener("submit", addNewProduct);
function addNewProduct(e) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;
  const price = e.target.elements.price.value;
  const newProduct = { title, description, price };
  addProduct(newProduct).then(({ data }) => {
    const markupNewCart = markupProductAdd(data);
    newProductSection.innerHTML = markupNewCart;
    newProductSection.reset();
  });
}
