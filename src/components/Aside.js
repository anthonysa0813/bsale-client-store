import { getProducts } from "../api/fetchFunctions";
const container = document.querySelector(".mainGrid nav ul");
const elementCate1 = document.getElementById("cate1");
const elementCate2 = document.getElementById("cate2");
const elementCate3 = document.getElementById("cate3");
const elementCate4 = document.getElementById("cate4");
const elementCate5 = document.getElementById("cate5");
const elementCate6 = document.getElementById("cate6");
const elementCate7 = document.getElementById("cate7");

console.log(elementCate1);

getProducts("category").then((res) => {
  console.log(res);
  const categoryRes1 = res[0].name;
  const categoryRes2 = res[1].name;
  const categoryRes3 = res[2].name;
  const categoryRes4 = res[3].name;
  const categoryRes5 = res[4].name;
  const categoryRes6 = res[5].name;
  const categoryRes7 = res[6].name;

  elementCate1.textContent = categoryRes1;
  elementCate2.textContent = categoryRes2;
  elementCate3.textContent = categoryRes3;
  elementCate4.textContent = categoryRes4;
  elementCate5.textContent = categoryRes5;
  elementCate6.textContent = categoryRes6;
  elementCate7.textContent = categoryRes7;
});
