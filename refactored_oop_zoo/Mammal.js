const Animal = require("./Animal.js"); // ← เพิ่มบรรทัดนี้

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }
  // this is an example of polymorphism; overide the parent's method
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

module.exports = Mammal;
