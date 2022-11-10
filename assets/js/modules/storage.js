import  ProductCreator from "./productCreator.js";
class Storage {

  constructor() {
    this.storage = localStorage.getItem("mycart");
    this.checkStorage();
  }

  checkStorage() {
    if(this.storage){
      this.getStorage();
    }else{
      localStorage.setItem("mycart",[]);
    }
  }

  addStorage(result) {
    this.storage = localStorage.getItem("mycart");
    const obj = new Array(this.storage);
    if(obj[0] =="") {
      obj.pop();
    }
    obj.push(result);
    localStorage.setItem("mycart",JSON.stringify(obj));
    ProductCreator.addProduct(result);
  }

  static removeStorage(key){
    this.storage = localStorage.getItem("mycart");
    let obj = JSON.parse(this.storage);
    const len = obj.length;
    obj.forEach((item,index)=>{
      if(item.title == key){
        for(index;index<len;index++){
          obj[index] = obj[index+1];
        }
      }
    });
    obj.pop();
    localStorage.setItem("mycart",JSON.stringify(obj));
  }

  getStorage() {
    this.storage = localStorage.getItem("mycart");
    let obj = JSON.parse(this.storage);
    obj.forEach((item)=>{
     ProductCreator.addProduct(item);
    });
  }
}

export default Storage;