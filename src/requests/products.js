import { dummyApi } from "../services/api";

// function for all products task 1

export async function fetchAllProducts() {
  return await dummyApi.get("/products");
}

export async function getProductId(id) {
  return await dummyApi.get(`/products/${id}`);
}

export async function addProduct(newProduct) {
  return await dummyApi.post("/products/add", newProduct);
}
