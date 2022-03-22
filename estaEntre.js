const numberIs = 16;
const numberA = 1;
const numberB = 15;
const numberC = 99;


function numberValue(numberIs) {
  if (numberIs >= numberA && numberIs <= numberB) {
    console.log("O número está entre ", numberA, " e ", numberB);
    console.log("true");
  } else {
    console.log("O número não está entre ", numberA, " e ", numberB);
    console.log("false");
  }
  if (numberIs >= numberB && numberIs <= numberC) {
    console.log("O número está entre ", numberB, " e ", numberC);
    console.log("true")
  } else {
    console.log("O número não está entre ", numberB, " e ", numberC);
    console.log("false");
  }

  if (numberIs >= numberA && numberIs <= numberC) {
    console.log("O número está entre ", numberA, " e ", numberC);
    console.log("true")
  } else {
    console.log("O número não está entre ", numberA, " e ", numberC);
    console.log("false");
  }
}

numberValue(numberIs);