let valorHora = 11.63
let horasTrabalhadasMes = 100.0

function calcularSalario() {
  let salario = horasTrabalhadasMes * valorHora;
  console.log("Salário igual a R$ ".concat(salario));
}

calcularSalario();