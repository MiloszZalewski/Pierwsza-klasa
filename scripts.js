function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iphone6s = new Phone("Apple", 2250, "silver");
var galaxys6 = new Phone("Samsung", 3000, "black");
var oneplusone = new Phone("OnePlus", 1500, "white");

iphone6s.printInfo();
galaxys6.printInfo();
oneplusone.printInfo();