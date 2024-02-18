import { dummyApi } from "../services/api";

// function for all products task 1

export async function fetchAllProducts() {
    return await dummyApi.get("/products");
}