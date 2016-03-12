var SandwichMaker = (function(cheeseSandwich){

  var cheeseType = {American: 1, Swiss: 1.25, Provalone: 1.5, Pepperjack: 1.75};
  var cheesePrice = 0;
  var cheeseChosen = [];

// Parses Array of Cheeses chosen and adds together prices
  var calculateCheesePrice = function(){
    for (var i=0; i<cheeseChosen.length; i++){
      cheesePrice += cheeseType[cheeseChosen[i]];
    }
  };

// Assigns Cheese selected Checkboxes and calls calculateCheesePrice to update total cost of Cheese order
  cheeseSandwich.addCheese = function(cheese){
    cheeseChosen = cheese;
    cheesePrice = 0;
    calculateCheesePrice();
  };

// Returns total Price of current Cheese order
  cheeseSandwich.returnCheesePrice = function(){
    return cheesePrice;
  }

  return cheeseSandwich;

})(SandwichMaker);