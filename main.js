import { getProducts } from "./src/api/fetchFunctions";
import { ProductCard } from "./src/components/ProductCard";
import "./style.css";

const cate1 = document.querySelector("#cate1");
const cate2 = document.querySelector("#cate2");
const cate3 = document.querySelector("#cate3");
const cate4 = document.querySelector("#cate4");
const cate5 = document.querySelector("#cate5");
const cate6 = document.querySelector("#cate6");
const cate7 = document.querySelector("#cate7");
const $form = document.querySelector("#form");
const $searchElement = document.querySelector("#searchValue");

const mainContainer = document.querySelector("#mainProducts");
const nodeChild = document.querySelector(".productContainer ");

const idCategories = {
  cate1: 1,
  cate2: 2,
  cate3: 3,
  cate4: 4,
  cate4: 4,
  cate5: 5,
  cate6: 6,
  cate7: 7,
};

// window.addEventListener("DOMContentLoaded", getProducts("products"));

cate1.addEventListener("click", () => {
  replaceProducts("cate1");
});

cate2.addEventListener("click", () => {
  replaceProducts("cate2");
});

cate3.addEventListener("click", () => {
  replaceProducts("cate3");
});

cate4.addEventListener("click", () => {
  replaceProducts("cate4");
});

cate5.addEventListener("click", () => {
  replaceProducts("cate5");
});

cate6.addEventListener("click", () => {
  replaceProducts("cate6");
});

cate7.addEventListener("click", () => {
  replaceProducts("cate7");
});

function replaceProducts(element) {
  getProducts(`products/${idCategories[element]}`).then((data) => {
    mainContainer.innerHTML = "";
    const dataLocalStorage = JSON.parse(localStorage.getItem("products"));
    let listCardElements = "";
    dataLocalStorage.forEach((product) => {
      listCardElements += ProductCard(product);
    });
    mainContainer.innerHTML = listCardElements;
  });
}

//https://bsale-rest-production.up.railway.app/api/products?name=PISCO

function replaceProductsWithFilter(name) {
  getProducts(`products?name=${name}`).then((data) => {
    mainContainer.innerHTML = "";
    const dataLocalStorage = JSON.parse(localStorage.getItem("products"));
    let listCardElements = "";
    if (dataLocalStorage.length === 0) {
      mainContainer.innerHTML = "No se encontró ningún producto....:(";
    } else {
      dataLocalStorage.forEach((product) => {
        listCardElements += ProductCard(product);
      });
      mainContainer.innerHTML = listCardElements;
    }
  });
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = $searchElement.value.toUpperCase();
  replaceProductsWithFilter(value);
});
