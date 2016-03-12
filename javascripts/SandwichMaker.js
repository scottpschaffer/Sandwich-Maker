// Base IIFE
var SandwichMaker = (function(){

  var totalPrice = 0;

  return {
    addTopping: function(toppingPrice){
      totalPrice += toppingPrice;
    },

// Create Breads array and array of Breads checkboxes, and push the value of each Bread checkbox if it is checked
// Then return array of selected Breads
    getBreads: function(){
      var breadArray = [];
      var cbBread = document.getElementsByClassName("bread");
      for (var a=0; a<cbBread.length; a++){
        if (cbBread[a].checked){
          breadArray.push(cbBread[a].value);
        }
      }
      return breadArray;
    },

// Create Meats array and array of Meats checkboxes, and push the value of each Meat checkbox if it is checked
// Then return array of selected Meats
    getMeats: function(){
      var meatArray = [];
      var cbMeat = document.getElementsByClassName("meat");
      for (var a=0; a<cbMeat.length; a++){
        if (cbMeat[a].checked){
          meatArray.push(cbMeat[a].value);
        }
      }
      return meatArray;
    },

    // Create Cheeses array and array of Cheeses checkboxes, and push the value of each Cheeses checkbox if it is checked
// Then return array of selected Cheeses
    getCheeses: function(){
      var cheeseArray = [];
      var cbCheese = document.getElementsByClassName("cheese");
      for (var a=0; a<cbCheese.length; a++){
        if (cbCheese[a].checked){
          cheeseArray.push(cbCheese[a].value);
        }
      }
      return cheeseArray;
    },

    // Create Veggies array and array of Veggies checkboxes, and push the value of each Veggies checkbox if it is checked
// Then return array of selected Veggies
    getVeggies: function(){
      var veggieArray = [];
      var cbVeggie = document.getElementsByClassName("veggie");
      for (var a=0; a<cbVeggie.length; a++){
        if (cbVeggie[a].checked){
          veggieArray.push(cbVeggie[a].value);
        }
      }
      return veggieArray;
    },

    // Create Conds array and array of Conds checkboxes, and push the value of each Condiment checkbox if it is checked
// Then return array of selected Condiments
    getConds: function(){
      var condArray = [];
      var cbCond = document.getElementsByClassName("cond");
      for (var a=0; a<cbCond.length; a++){
        if (cbCond[a].checked){
          condArray.push(cbCond[a].value);
        }
      }
      return condArray;
    }
  }
})();
