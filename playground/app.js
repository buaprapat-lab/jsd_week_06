// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // ต้องการ กรหยสฟั 100 90 80 70 ... 0

// for (let i = 100; i <= 100 && i >= 0; i -= 10) {
//   console.log(i);
// }

// // const animals = ["tiger", "Bear", "Elephant", "Bull"];
// // first index = 0
// // last index = 3
// // length = 4

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// const animals = [
//   "Aardvark",
//   "Albatross",
//   "Alligator",
//   "Alpaca",
//   "Ant",
//   "Anteater",
//   "Antelope",
//   "Ape",
//   "Armadillo",
//   "Donkey",
//   "Baboon",
//   "Badger",
//   "Barracuda",
//   "Bat",
//   "Bear",
//   "Beaver",
//   "Bee",
//   "Bison",
//   "Boar",
//   "Buffalo",
//   "Butterfly",
//   "Camel",
//   "Capybara",
//   "Caribou",
//   "Cassowary",
//   "Cat",
//   "Caterpillar",
//   "Cattle",
//   "Chamois",
//   "Cheetah",
//   "Chicken",
//   "Chimpanzee",
//   "Chinchilla",
//   "Chough",
//   "Clam",
//   "Cobra",
//   "Cockroach",
//   "Cod",
//   "Cormorant",
//   "Coyote",
//   "Crab",
//   "Crane",
//   "Crocodile",
//   "Crow",
//   "Curlew",
//   "Deer",
//   "Dinosaur",
//   "Dog",
//   "Dogfish",
//   "Dolphin",
//   "Dotterel",
//   "Dove",
//   "Dragonfly",
//   "Duck",
//   "Dugong",
//   "Dunlin",
//   "Eagle",
//   "Echidna",
//   "Eel",
//   "Eland",
//   "Elephant",
//   "Elk",
//   "Emu",
//   "Falcon",
//   "Ferret",
//   "Finch",
//   "Fish",
//   "Flamingo",
//   "Fly",
//   "Fox",
//   "Frog",
//   "Gaur",
//   "Gazelle",
//   "Gerbil",
//   "Giraffe",
//   "Gnat",
//   "Gnu",
//   "Goat",
//   "Goldfinch",
//   "Goldfish",
//   "Goose",
//   "Gorilla",
//   "Goshawk",
//   "Grasshopper",
//   "Grouse",
//   "Guanaco",
//   "Gull",
//   "Hamster",
//   "Hare",
//   "Hawk",
//   "Hedgehog",
//   "Heron",
//   "Herring",
//   "Hippopotamus",
//   "Hornet",
//   "Horse",
//   "Human",
//   "Hummingbird",
//   "Hyena",
//   "Ibex",
//   "Ibis",
//   "Jackal",
//   "Jaguar",
//   "Jay",
//   "Jellyfish",
//   "Kangaroo",
//   "Kingfisher",
//   "Koala",
//   "Kookabura",
//   "Kouprey",
//   "Kudu",
//   "Lapwing",
//   "Lark",
//   "Lemur",
//   "Leopard",
//   "Lion",
//   "Llama",
//   "Lobster",
//   "Locust",
//   "Loris",
//   "Louse",
//   "Lyrebird",
//   "Magpie",
//   "Mallard",
//   "Manatee",
//   "Mandrill",
//   "Mantis",
//   "Marten",
//   "Meerkat",
//   "Mink",
//   "Mole",
//   "Mongoose",
//   "Monkey",
//   "Moose",
//   "Mosquito",
//   "Mouse",
//   "Mule",
//   "Narwhal",
//   "Newt",
//   "Nightingale",
//   "Octopus",
//   "Okapi",
//   "Opossum",
//   "Oryx",
//   "Ostrich",
//   "Otter",
//   "Owl",
//   "Oyster",
//   "Panther",
//   "Parrot",
//   "Partridge",
//   "Peafowl",
//   "Pelican",
//   "Penguin",
//   "Pheasant",
//   "Pig",
//   "Pigeon",
//   "Pony",
//   "Porcupine",
//   "Porpoise",
//   "Quail",
//   "Quelea",
//   "Quetzal",
//   "Rabbit",
//   "Raccoon",
//   "Rail",
//   "Ram",
//   "Rat",
//   "Raven",
//   "Red deer",
//   "Red panda",
//   "Reindeer",
//   "Rhinoceros",
//   "Rook",
//   "Salamander",
//   "Salmon",
//   "Sand Dollar",
//   "Sandpiper",
//   "Sardine",
//   "Scorpion",
//   "Seahorse",
//   "Seal",
//   "Shark",
//   "Sheep",
//   "Shrew",
//   "Skunk",
//   "Snail",
//   "Snake",
//   "Sparrow",
//   "Spider",
//   "Spoonbill",
//   "Squid",
//   "Squirrel",
//   "Starling",
//   "Stingray",
//   "Stinkbug",
//   "Stork",
//   "Swallow",
//   "Swan",
//   "Tapir",
//   "Tarsier",
//   "Termite",
//   "Tiger",
//   "Toad",
//   "Trout",
//   "Turkey",
//   "Turtle",
//   "Viper",
//   "Vulture",
//   "Wallaby",
//   "Walrus",
//   "Wasp",
//   "Weasel",
//   "Whale",
//   "Wildcat",
//   "Wolf",
//   "Wolverine",
//   "Wombat",
//   "Woodcock",
//   "Woodpecker",
//   "Worm",
//   "Wren",
//   "Yak",
//   "Zebra",
// ];

// //Q: อยากให้ปริ้นย้อนกลับไป

// for (let i = animals.length; i >= 0; i--) {
//   console.log(i, animals[i]);
// }

// let str = "LOL";

// for (let i = 0; i <= 5; i++) {
//   console.log("outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("inner:", str[j]);
//   }
// }

// let listOfAnimal = [
//   ["Ant", "Bull", "Cat"],
//   ["Dog", "Elephant", "Fly"],
//   ["Giraff", "Hen", "Iel"],
// ];

// // show list of each animal

// for (let i = 0; i < listOfAnimal.length; i++) {
//   console.log(listOfAnimal[i]);
//   for (let j = 0; j < listOfAnimal[i].length; j++) {
//     console.log(listOfAnimal[i][j]);
//   }
// }

// While loops

// let num = 0;

// while (num < 10) {
//   console.log(num);
//   num += 1;
// }
// //ถ้าหลุดจาก loop ไม่ตรงเงื่อนไขแล้ว

// console.log("end loop");

//example 2

// let ans = prompt("please enter your answer");
// let q = 3;

// //เขียนโปรแกรมเดาเลขไปจนกว่าเลขจะเท่ากับ 3

// while (ans !== q) {
//   //ถ้าไม่ถูกต้องต้องเดาต่อไปเรื่อยๆ
//   ans = prompt("please enter your answer");
// }

// //ถ้าตอบถูก หลุดออกมาเมื่อไหร่
// alert("your answer is correct!");

// let q = 8;
// let ans = prompt("Please enter your answer");

// while (true) {
//   if (q === Number(ans)) {
//     // แปลง ans เป็น Number ก่อน
//     alert("Your answer is correct.");
//     break;
//   } else {
//     ans = prompt("Please enter your answer"); // แก้ typo "yplease" ด้วย
//   }
// }

// alert("End loop");

// //สามารถใช้กับ for loop ได้

// for (let i = 0; i <= 10; i++){
//   console.log(i);
//   if (i == 8){
//     break;
//   }
// }

//สร้างโปรแกรมที่ กรอก inout เดาเลขจนกว่าจะตรง
//ถ้าเบื่อก็กดออกจากเกมได้

// const maximum = propmt("please enter maximum number");
// const targetNum = Math.floor(Math.random() * maximum);

// let guess = prompt("Enter your answer");
// let attempts = 1;

// while (guess != targetNum) {
//   if ((guess = "q")) {
//     break;
//   }
//   attempts += 1;

//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new answer");
//   } else if (guess < targetNum) {
//     guess = prompt("Too low! Enter a new answer");
//   }
// }

// if (guess == "q") {
//   alert("Ok! You got it!");
// } else {
//   alert("You got it! it took you ${attempts} guesses");
// }

// nonononononononono สับสนไปปโค้ด

const maximum = prompt("Enter the maximum number");
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (or 'q' to quit)");
let attempts = 1;

while (true) {
  // 1. เช็คก่อนเลยว่าอยากเลิกไหม? (วางไว้บนสุดของลูป)
  if (guess === "q") break;

  // 2. ถ้าไม่เลิก ให้เช็คว่า "ถูกหรือยัง?"
  // ต้องแปลง guess เป็น Number ก่อนเปรียบเทียบ (เพราะ prompt คืนค่าเป็น String)
  if (parseInt(guess) === targetNum) {
    break; // ทายถูกแล้ว ออกจากลูปไปโชว์ความสำเร็จ
  }

  // 3. ถ้ายังไม่ถูก และยังไม่เลิก... ให้ใบ้และถามใหม่
  attempts++; // เพิ่มจำนวนครั้งที่ทาย
  if (parseInt(guess) > targetNum) {
    guess = prompt("Too high! Try again (or 'q' to quit)");
  } else {
    guess = prompt("Too low! Try again (or 'q' to quit)");
  }
}

// 4. สรุปผลหลังออกจากลูป
if (guess === "q") {
  alert("Game Over. You quit!");
} else {
  alert(`You got it! It took you ${attempts} guesses.`);
}
