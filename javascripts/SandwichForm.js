// Get Calculate Button and add Event Listener
var calcButton = document.getElementById("btnSelect");
calcButton.addEventListener("click", function(){

// Get Breads/Meats/Cheese/Vegetables/Condiments that are checked and add them to respective arrays
  SandwichMaker.addBread(SandwichMaker.getBreads());
  SandwichMaker.addMeat(SandwichMaker.getMeats());
  SandwichMaker.addCheese(SandwichMaker.getCheeses());
  SandwichMaker.addVeggie(SandwichMaker.getVeggies());
  SandwichMaker.addCondiment(SandwichMaker.getConds());

// Calculate Costs of Breads/Meats/Cheeses/Vegetables/Condiments
  var brCost = SandwichMaker.returnBreadPrice();
  var meCost = SandwichMaker.returnMeatPrice();
  var chCost = SandwichMaker.returnCheesePrice();
  var veCost = SandwichMaker.returnVeggiePrice();
  var coCost = SandwichMaker.returnCondimentPrice();
  var toCost = (brCost + meCost + chCost + veCost + coCost).toFixed(2);

// Calculate total Cost and apply to DOM
  var totalCost = document.getElementById("tCost");
  totalCost.innerHTML = "<p>Your final order is: </p><p>Bread: " + SandwichMaker.getBreads().toString() + 
                        "</p><p>Meat: " + SandwichMaker.getMeats().toString() + "</p><p>Cheese: " +
                        SandwichMaker.getCheeses().toString() + "</p><p>Vegetables: " + SandwichMaker.getVeggies().toString() +
                        "</p><p>Condiments: " + SandwichMaker.getConds().toString() + "</p><p>Total Cost: $" + toCost + "</p>";
});