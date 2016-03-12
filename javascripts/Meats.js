var SandwichMaker = (function(meatSandwich){

  var meatType = {Turkey: 2, Ham: 2.25, Roast_Beef: 3.25, Salami: 2.75};
  var meatPrice = 0;
  var meatChosen = [];

// Parses Array of Meats chosen and adds together prices
  var calculateMeatPrice = function(){
    
    for (var i=0; i<meatChosen.length; i++){
      meatPrice += meatType[meatChosen[i]];
    }
  };

// Assigns Meats selected Checkboxes and calls calculateMeatPrice to update total cost of Meat order
  meatSandwich.addMeat = function(meat){

    meatChosen = meat;
    meatPrice = 0;
    calculateMeatPrice();
  };

// Returns total Price of current Meat order
  meatSandwich.returnMeatPrice = function(){
    return meatPrice;
  }

  return meatSandwich;

})(SandwichMaker);
