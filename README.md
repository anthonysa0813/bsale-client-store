# Bsale Store

- aplicación de tienda virtual donde podrás visualizar los mejores productos del mercado de bebidas.

## Tecnologías usadas para el desarrollo:

### Cliente:

- Javascript
- HTML
- CSS

### Servidor:

- Javascript
- NodeJs
- Express
- Dotenv
- Mysql2
- cors

### URL del proyecto en deploy (Netlify):

```bash
https://teal-meerkat-cb51b8.netlify.app/
```

## Repositorios:

- cliente: https://github.com/anthonysa0813/bsale-client-store
- Servidor: https://github.com/anthonysa0813/bsale-rest

## Documentación en Postman (Acerca de como usar las rutas a nivel del servidor)

- https://documenter.getpostman.com/view/9252275/2s847HNY3V

## Explicación del Proyecto

### 1. ASIDE CATEGORÍAS

- Empezamos explicando la creación de los elementos que albergarán el valor de las categorías. Creamos 7 elementos, ya que es el número que nos retorna nuestra base de datos.

```js
const cate1 = document.querySelector("#cate1");
const cate2 = document.querySelector("#cate2");
const cate3 = document.querySelector("#cate3");
const cate4 = document.querySelector("#cate4");
const cate5 = document.querySelector("#cate5");
const cate6 = document.querySelector("#cate6");
const cate7 = document.querySelector("#cate7");
const $form = document.querySelector("#form");
```

- Luego de esto, vamos a usar una función llamada "getProducts", que se encargará de conectarse con mi base de datos y retornar una respuesta. Cabe recalcar que esta función requiere de un parámetro.

```js
const URL = `https://bsale-rest-production.up.railway.app/api`;

export const getProducts = async (endpoint) => {
  const response = await fetch(`${URL}/${endpoint}`);
  console.log(`${URL}/${endpoint}`);
  const data = await response.json();
  localStorage.setItem("products", JSON.stringify(data));
  return data;
};
```

- La usaremos para mostrar nuestras categorías.

```js
getProducts("category").then((res) => {
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
```

- En el último ejemplo, estamos consumiendo la api y agregando la información que requerimos a nuestros elementos (nodos) para mostrar nuestras categorías en el aside.

### 2. RENDERIZAR LOS PRODUCTOS

- Primero, antes que nada, vamos a seleccionar un elemento que viva en nuestro html, para indicarle luego que a ese lugar vamos a renderizar nuestros productos.

```js
const mainContainer = document.querySelector("#mainProducts");
```

- Por segundo lugar, vamos a traer nuestros productos, en primera instancia, vamos a cargar todos los productos.

```js
getProducts("products").then((data) => {
  let listCardElements = "";
  const dataLocalStorage = JSON.parse(localStorage.getItem("products"));
  dataLocalStorage.forEach((product) => {
    listCardElements += ProductCard(product);
  });
  mainContainer.innerHTML = listCardElements;
});
```

- Como podrán observar, estamos consumiendo la información y en este paso voy a recalcar 2 cosas. Primero, estoy guardando la información en el localStorage para una persistencia de datos.
- luego, por cada producto que obtenga al iterar con el forEach, estoy creando un nuevo producto con mi función llamado "ProductCard"
- Finalmente, estoy renderizando el producto creado en nuestro elemento "mainContainer" que fue lo primero que hicimos en esta sección.

```js
import photo from "../../public/notproduct.png";

export const ProductCard = (product) => {
  return `
  <div class="productContainer ">
    <div class="productImage">
      <img src=${product.url_image ? product.url_image : photo} />
    </div>
    <div class="productInfo">
      <h4>${product.name}</h4>
    <div class="discountContainer">
      <span>Dsc: ${product.discount}%</span>
    </div>
    <div class="productFooter ">
      <p class="priceText">$${product.price}</p>
      <button type="button">Agregar al carrito</button>
    </div>
    </div>
  </div>
  `;
};
```
