'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAg2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAg2(1991);

console.log(age1, age2);

// Arrow function

const calcAg3 = (birthYear) => 2037 - birthYear;
const age3 = calcAg3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

const cutFruitPieces = (fruit) => fruit * 3;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

function fruitProcessor(apples, oranges) {
  // const applePieces = cutFruitPieces(apples);
  // const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${cutFruitPieces(
    apples
  )} pieces of apples and ${cutFruitPieces(oranges)} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const retirement = (age) => 65 - age;

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const checkRetirement = retirement(age);

  if (checkRetirement > 0) {
    return `${firstName} retires in ${checkRetirement} years`;
  } else {
    return `${firstName} has already retired`;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1981, 'Eduardo'));
console.log(yearsUntilRetirement(1971, 'Pedro'));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
console.log(jonas[4][0]);

// Exercise
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1])
];
console.log(ages);

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Michael'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

// push(value) ~ unshift(value) // Incluir
// pop() ~ shift() // Excluir
// includes(true~false) ~ indexOf(array position)

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
