import { getProducts } from "../api/fetchFunctions";
import { ProductCard } from "./ProductCard";
const mainContainer = document.querySelector("#mainProducts");

getProducts("products").then((data) => {
  let listCardElements = "";
  const dataLocalStorage = JSON.parse(localStorage.getItem("products"));
  dataLocalStorage.forEach((product) => {
    listCardElements += ProductCard(product);
  });
  mainContainer.innerHTML = listCardElements;
});
