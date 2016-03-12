var SandwichMaker = (function(breadSandwich){

  var breadType = {White: 1, Wheat: 1.5, Rye: 1.75, Pumpernickel: 2};
  var breadPrice = 0;
  var breadChosen = [];

// Parses Array of Breads chosen and adds together prices
  var calculateBreadPrice = function(){
    for (var i=0; i<breadChosen.length; i++){
      breadPrice += breadType[breadChosen[i]];
    }
  };

// Assigns Bread selected Checkboxes and calls calculateBreadPrice to update total cost of Bread order
  breadSandwich.addBread = function(bread){
    breadChosen = bread;
    breadPrice = 0;
    calculateBreadPrice();
  };

// Returns total Price of current Bread order
  breadSandwich.returnBreadPrice = function(){
    return breadPrice;
  }

  return breadSandwich;

})(SandwichMaker);
