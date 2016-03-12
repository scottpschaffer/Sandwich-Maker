var SandwichMaker = (function(veggieSandwich){

  var veggieType = {Lettuce: .25, Tomatoes: .25, Pickles: .75, Onions: .5, Olives: .25};
  var veggiePrice = 0;
  var veggieChosen = [];

// Parses Array of Veggies chosen and adds together prices
  var calculateVeggiePrice = function(){
    for (var i=0; i<veggieChosen.length; i++){
      veggiePrice += veggieType[veggieChosen[i]];
    }
  };

// Assigns Veggies selected Checkboxes and calls calculateVeggiePrice to update total cost of Veggie order
  veggieSandwich.addVeggie = function(veggie){

    veggieChosen = veggie;
    veggiePrice = 0;
    calculateVeggiePrice();
  };

// Returns total Price of current Veggie order
  veggieSandwich.returnVeggiePrice = function(){
    return veggiePrice;
  }

  return veggieSandwich;

})(SandwichMaker);
