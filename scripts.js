function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var GalaxyS6 = new Phone("Samsung", 3000, "black");
var OnePlusOne = new Phone("OnePlus", 1500, "white");

iPhone6S.printInfo();
GalaxyS6.printInf0();
OnePlusOne.printInfo();