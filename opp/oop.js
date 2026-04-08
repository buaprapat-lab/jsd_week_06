// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.
// run by node oop.js

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says: ROAR!!`);
  },
};

//ถ้าอยากให้สิงโต makeSound เริ่มจากเรียกชื่อตัวแปรนี้ และสิ่งที่ต้องการ

lion.makeSound();

// The Class Template (Encapsulation) สำหรับสัตว์ต่างๆหลายชนิดในสวนสัตว์ของเรา
// ใช้ capital letter ตั้งชื่อเสมอ

class Animal {
  constructor(name, species) {
    this.name = name; //หลังจากที่ได้มา เอาไปเก็บไว้ที่ name
    this.species = species;
    this._hunger = 50;
    // _ internal state of Animal class (protected by _) เวลาสร้าง objects หลายๆตัวใน class Animal มันจะได้ไปด้วย
  }

  //  การกำหนด method จะไม่เขียนใน constructor แต่จะแยกออกมา
  makeSound() {
    console.log(`${this.name} make a sound...`);
  }

  eat() {
    this._hunger -= 10; // มาจาก this._hunger = this._hunger - 10
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

// Q: ถ้าอยากเพิ่มสัตว์ตัวอื่นด้วยจะทำยังไง?
/* วิธีที่ 1: สร้างตัวใหม่จาก Class เดิม (New Instance)
วิธีนี้ง่ายที่สุด คือการใช้ new Animal() เพื่อปั๊มสัตว์ตัวใหม่ออกมา โดยส่งค่า name และ species เข้าไปใน constructor */
// Object Instance

// สร้างแมวชื่อ Tom
const cat = new Animal("Tom", "Cat");

// สร้างหมีชื่อ Baloo
const bear = new Animal("Baloo", "Bear");

// เรียกใช้งาน Method ที่อยู่ใน Class
cat.makeSound(); // Shere Khan make a sound...
bear.eat(); // Baloo the Bear ate. Hunger is now 40

/* วิธีที่ 2: ใช้ Inheritance
ถ้าสัตว์แต่ละชนิดมี "เสียง" หรือ "พฤติกรรม" ที่ไม่เหมือนกัน (เช่น สิงโตคำราม แต่เป็ดก้าบๆ) เราจะใช้คำสั่ง extends เพื่อสร้าง Class ลูกที่เจาะจงชนิดสัตว์ลงไป */

// สร้าง Class ลูกที่สืบทอดมาจาก Animal
class Cat extends Animal {
  constructor(name) {
    // super() คือการส่งชื่อไปให้ Class แม่ (Animal) จัดการเก็บค่า name และ species
    super(name, "Cat");
  }

  // Polymorphism: เขียนทับ Method เดิมให้เป็นเสียงสิงโตจริงๆ
  makeSound() {
    console.log(`${this.name} says: Meowwwwwww`);
  }

  //เพิ่มความสามารถเฉพาะตัวของแมว
  sleep() {
    console.log(`${this.name} is taking a nap .. Zzz`);
  }
}

class Duck extends Animal {
  constructor(name) {
    super(name, "Duck");
  }

  makeSound() {
    console.log(`${this.name} says: QUACK! QUACK!`);
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name, "Fish");
  }
  makeSound() {
    console.log(`${this.name} says: Boo~ Boo~ `);
  }

  swim() {
    console.log(`${this.name} like to swim in the open sea.`);
  }
}

// นำมาใช้งาน
const myCat = new Cat("Tom");
const myDuck = new Duck("Donald");
const myFish = new Fish("Nemo");

myCat.makeSound(); // Simba says: Meowwwwwww
myDuck.makeSound(); // Donald says: QUACK! QUACK!
myCat.eat(); // Simba the Lion ate. Hunger is now 40 (ใช้ Method eat จากตัวแม่ได้เลย)
myCat.sleep(); // Tom is taking a nap... Zzz

/////////// คุณนิติเฉลย specialized classes (inheritance) ///////////

class Mammal extends Animal {
  constructor(name, species, furColor) {
    //เรียก build in function super มาได้
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }
  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}
class bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }

  // this is an example of polymorphism that overide the method

  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}
// เหมือนสร้างเกมเลย ทุกตัวละครมีพลังพิเศษที่ต่างกัน
// สามารถทั้ง Inherit และยังสร้างขึ้นใหม่ได้อีก

/*
// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We'll build a Virtual Zoo starting from a simple object and evolving into
// a full JS OOP implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says: ROAR!!`);
  },
};

lion.makeSound();

// The Class Template (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }

  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }

  eat() {
    this._hunger = this._hunger - 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

// Object instance
const leo = new Animal("Leo", "Lion");

console.log(leo);

console.log(leo._hunger);
leo.eat();
console.log(leo._hunger);

// specialized classes (inheritance)

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
  */
