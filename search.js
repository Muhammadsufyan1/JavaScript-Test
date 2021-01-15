class search{

  //var key; var value;	
  constructor(key,value) {
    this.key = key;
    this.value = value;
  }
  setStorageValue() {
    localStorage.setItem(this.key,this.value);
    return "Item Save";
  }
  getStorageValue(){
  	return localStorage.getItem(this.key);
  }
}
document.addEventListener("DOMContentLoaded", function(event) { 
   var val = document.querySelectorAll('[itemprop="sku"]')[0];
	var searchObj = new search("SKU",val.innerHTML);
	var setItem = searchObj.setStorageValue();
	var getItem = searchObj.getStorageValue();
	console.log(getItem+' '+setItem);
});


