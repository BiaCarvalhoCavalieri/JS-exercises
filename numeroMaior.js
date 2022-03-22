function maiorOuIgual() {
  const a = 1;
  const b = "asd";
  if (typeof a != typeof b) {
    console.log(false);
  } else if (a < b) {
    console.log(false);
  } else {
    console.log(true);
  }
}

maiorOuIgual();