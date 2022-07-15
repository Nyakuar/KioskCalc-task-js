// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"
1. 
function calculate(quantity,fruit,price){
  let total=quantity*price    
  return `${quantity},${fruit} for ksh ${total}`
}
console.log(calculate(6,"orange",30))

// Assignment 2
// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the 
// fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”
2.
class KioskCalc {
  constructor(fruit,quantity) {
    this.fruit= fruit;
    this.quantity=quantity
    this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
    this.getTotalCost=function(){
      return `${quantity} ${fruit} for KES ${quantity* this.fruitsPriceList.avocado}`
     
    }
  }

}

KioskCalc.prototype.price = 30;

var kiosk = new KioskCalc("Orange", 2);
console.log(kiosk.getTotalCost());

