// Using OOP
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


// Using Core JS

// document.addEventListener("DOMContentLoaded", function(event) { 
// localStorage.setItem('SKU',document.querySelectorAll('[itemprop="sku"]')[0]);
// console.log(localStorage.getItem('SKU'));
//});

// Using jQuery

// $(document).ready(function(){
//   localStorage.setItem("SKU", $("[itemprop="sku"]").html())
//   console.log(localStorage.getItem('SKU'));

// });
