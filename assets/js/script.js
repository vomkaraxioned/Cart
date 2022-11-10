import ProductCreator from "./modules/productCreator.js";
import Storage from "./modules/storage.js";

const searchForm = document.querySelector(".shopping__search"),
products = document.querySelector(".shopping__products"),
clearBtn = document.querySelector(".btn-clear"),
url ="https://fakestoreapi.com/products";

let result;

document.onload = new Storage();

fetch(url).then(response => response.json()).then(
  result=>getData(result)).catch(e=>products.innerHTML =`<li class=dummy>${e}</li>`);

const getData = (data)=>{
  result = data;
};

searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  products.innerHTML = "";
  const key = searchForm.children[0].children[0].value.trim();
  result.forEach((item)=>{
    if((item.title.match(key) || item.category.match(key)) && key != "" ) {
      const obj = new ProductCreator(item);
    }
  });
});

clearBtn.addEventListener("click",()=>{
  Storage.clearStorage();
});
