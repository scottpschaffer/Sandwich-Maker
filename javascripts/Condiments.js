var SandwichMaker = (function(condimentSandwich){

  var condimentType = {Mayonnaise: .5, Mustard: .5, Ketchup: .25};
  var condimentPrice = 0;
  var condimentChosen = [];

// Parses Array of Condiments chosen and adds together prices
  var calculateCondimentPrice = function(){
    for (var i=0; i<condimentChosen.length; i++){
      condimentPrice += condimentType[condimentChosen[i]];
    }
  };

// Assigns Condiment selected Checkboxes and calls calculateCondimentPrice to update total cost of Condiment order
  condimentSandwich.addCondiment = function(condiment){
    condimentChosen = condiment;
    condimentPrice = 0;
    calculateCondimentPrice();
  };

// Returns total Price of current Condiment order
  condimentSandwich.returnCondimentPrice = function(){
    return condimentPrice;
  }

  return condimentSandwich;

})(SandwichMaker);
