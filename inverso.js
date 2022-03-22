let yes = 'olá';

function inverso(yes) {
  if (typeof (yes) == 'boolean') {
    if (yes == true) {
      yes = false;
      console.log(yes);
    } else {
      yes = true;
      console.log(yes);
    }
  } else if (typeof (yes) == 'number') {
    yes = yes * (-1);
    console.log(yes);
  } else {
    console.log("Só é aceito boolean ou tipo number, mas o parâmetro é o tipo", typeof (yes));
  }
}

inverso(yes);
