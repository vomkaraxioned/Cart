import Storage from "./storage.js";

class ProductCreator extends Storage{
  constructor(result) {
    super();
    this.ul = document.querySelector(".shopping__products");
    this.li = document.createElement("li");
    this.figure = document.createElement("figure");
    this.heading = document.createElement("h3");
    this.span = document.createElement("span");
    this.category = document.createElement("span");
    this.rating = document.createElement("span");
    this.price = document.createElement("span");
    this.p = document.createElement("p");
    this.div = document.createElement("div");
    this.btn = document.createElement("button");
    this.img = document.createElement("img");

    this.li.classList.add("shopping__product");
    this.div.classList.add("shopping__product__details");
    this.heading.classList.add("shopping__product__title");
    this.span.classList.add("shopping__product__other-details");
    this.category.classList.add("category");
    this.rating.classList.add("rating");
    this.p.classList.add("shopping__product__descriptions");
    this.price.classList.add("price");
    this.btn.classList.add("btn-add");

    this.img.src = result.image;
    this.img.alt = result.title;
    this.heading.innerText = result.title;
    this.category.innerText = result.category;
    this.rating.innerText = `${result.rating.rate}(${result.rating.count} reviews)`;
    this.p.innerText = result.description;
    this.price.innerText = result.price;
    this.btn.innerText = "Add to cart";

    this.figure.appendChild(this.img);
    this.span.appendChild(this.category);
    this.span.appendChild(this.rating);
    this.div.appendChild(this.heading);
    this.div.appendChild(this.span);
    this.div.appendChild(this.p);
    this.li.appendChild(this.figure);
    this.li.appendChild(this.div);
    this.li.appendChild(this.price);
    this.li.appendChild(this.btn);
    this.ul.appendChild(this.li);

    this.btn.addEventListener("click",()=>{
      this.addStorage(result);
    });
  }

  static addProduct(result) {
    const cart = document.querySelector(".cart__products"),
    cartLi = document.createElement("li"),
    figure = document.createElement("figure"),
    img = document.createElement("img"),
    div = document.createElement("div"),
    label= document.createElement("label"),
    input = document.createElement("input"),
    span = document.createElement("span"),
    heading = document.createElement("h3"),
    btn = document.createElement("button");

    cartLi.classList.add("cart__product");
    heading.classList.add("cart__product__title");
    div.classList.add("quantity");
    input.classList.add("quantity");
    span.classList.add("price");
    btn.classList.add("clear");

    img.src = result.image;
    img.alt = result.title;
    input.type = "number";
    
    label.innerText = "quantity";
    span.innerText = result.price;
    heading.innerText = result.title;
    btn.innerText = "remove";

    div.appendChild(label);
    div.appendChild(input);
    figure.appendChild(img);
    cartLi.appendChild(figure);
    cartLi.appendChild(heading);
    cartLi.appendChild(div);
    cartLi.appendChild(span);
    cartLi.appendChild(btn);
    cart.appendChild(cartLi);

    btn.addEventListener("click",()=>{
      this.removeStorage(result.title);
      cartLi.remove();
    });
  }

}

export default ProductCreator;