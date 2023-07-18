function sayHello(name, lastName) {
  console.log(`Hello there ${name} ${lastName}`);
  var color = "blue";
}

function sum(num1, num2) {
  return num1 + num2;
}

function printNumbers() {
  for (let i = 0; i <= 21; i++) {
    if (i == 7 || i == 13) {
      continue;
    }
    console.log(i);
  }
}

function basicCalculations() {
  let numbers = [
    12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782,
    653, 845,
  ];

  numbers.forEach((element) => {
    console.log(element);
  });

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  //using a for loop
  let numbersSum = 0;
  let graterThan100 = 0;

  for (i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
    if (numbers[i] > 100) {
      graterThan100++;
    }
  }
  console.log("Reduce() Sum: ", sum); // to test if my for loop logic is correct
  console.log("For Loop Sum: ", numbersSum);
  console.log("Greater than 100: ", graterThan100);
}

function init() {
  console.log("Hello FSDI106!");

  const fName = "Rom";
  sayHello(fName, "Sarmiento");

  //   console.log(sum(2, 2));
  console.log(printNumbers());

  console.log(basicCalculations());
}

window.onload = init;
