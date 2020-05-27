'use strict';

let person =
  [
    {
      name: 'Alena',
      savings: 50000
    },
    {
      name: 'Karolína',
      savings: 50000
    },
  ];

// Simple testing for 2 persons:
// Case I: sum >= 100 000 && person[0].savings < 50 000
// person[0].savings = 38000;
// person[1].savings = 78000;

// Case II: sum >= 100 000 && person[1].savings < 50 000
// person[0].savings = 78000;
// person[1].savings = 38000;

// Case III: sum < 100 000 && person[0].savings < 50 000
// person[0].savings = 18000;
// person[1].savings = 52000;

// Case IV: sum < 100 000 && person[1].savings < 50 000
// person[0].savings = 52000;
// person[1].savings = 18000;


// The sum function was added in case an other person wants to join them :)
let sum = 0;
const sumSavings = () => {
  for (let i = 0; i < person.length; i++) {
    sum += person[i].savings;
  }
  return sum;
};

sum = sumSavings();

// Total costs and costs per person
const totalCosts = 100000;
const splittedCosts = totalCosts / person.length;

// First condition: Is the sum of the savings >= 100 000?
sum >= totalCosts ? console.log('Juchu! Máte naspořeno na Havaj!') : console.log('Holky, ještě je potřeba spořit...');

// Various scenarious depending on the sum of the savings and savings per person
for (let i = 0; i < person.length; i++) {
  if (sum >= totalCosts) {
    if (person[i].savings < splittedCosts) {
      console.log(`${person[i].name} musí po dovolené splatit ${splittedCosts - person[i].savings} Kč`);
    } else {
      console.log(`${person[i].name} má přeplatek ${person[i].savings - splittedCosts} Kč`);
    }
  } else {
    if (person[i].savings < splittedCosts) {
      console.log(`${person[i].name} musí na dovolenou ještě naspořit ${splittedCosts - person[i].savings} Kč`);
    } else {
      console.log(`${person[i].name} má přeplatek ${person[i].savings - splittedCosts} Kč`);
    }
  }
};
