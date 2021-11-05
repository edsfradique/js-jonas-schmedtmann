const continent = 'South American';
const country = 'Brazil';
const isIsland = false;
let population = 250000000;
const language = 'Portuguese';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// continent = 'Europa';
// language = 'Japanese';

console.log(population / 2);
population += 1;
console.log(population);
const finland = 6000000;
console.log(population > finland);
const averagePeopleCountry = 33000000;
console.log(population < averagePeopleCountry);
console.log(
  country +
    ' está na ' +
    continent +
    ', e seus ' +
    population +
    ' de pessoas falam ' +
    language
);
console.log(
  `${country} está na ${continent}, e seus ${population} de pessoas falam ${language}`
);

if (population > averagePeopleCountry) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country} population is ${population} below average`);
}
