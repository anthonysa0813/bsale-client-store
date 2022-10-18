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
