// declare array in ES6
// indexed with random access

// Create
var fruits = [1, "Nour", true, { name: "Omar", age: 25 }];
var vegitables = ["cucumber", "courgette", "aubergine"];
var odd = [1, -1, 3, 5];
var even = [2, 6, 8];

const arr = Array(3);
const arr1 = Array(3, 5, 6);
// console.log(arr, arr1);

// console.log(fruits);

// Create From, Map values

var random = [10, 2, 33, 33333, "jjjj"];
var compound = Array.from(random, (x) => 1 + x + 1);
var mapped = random.map((x) => 1 + x + 1);
// console.log(compound, mapped);

// looping
// can break of skip ( continue )

for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

for (let index in fruits) {
  //   console.log(fruits[index]);
}
for (let element of fruits) {
  //   console.log(element);
}

// while
let i = 0;
while (i < fruits.length) {
  //   console.log(fruits[i]);
  i++;
}

// do .. while
let j = 0;
do {
  //   console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// can't break of skip ( continue )
fruits.forEach((element) => {
  //   console.log(element);
});

// Concatenation
fruits.concat(vegitables);
var food = [...fruits, ...vegitables];
// console.log(fruits.concat(vegitables));
// console.log([...fruits, ...vegitables]);

// every
const isEven = (element, index, aray) => {
  return element % 2 == 0;
};
// console.log(odd.every(isEven));

// filter
var string = fruits.filter((element) => element.length > 0);
// console.log(string);

var element = fruits.find((element) => element === "Nour");
// console.log(element);
