const alunos = [
  {
    nome: "jose",
    notas: [8, 7.6, 8.9, 6]
  }, {
    nome: "mariana",
    notas: [9, 6.6, 7.9, 8]
  }, {
    nome: "caio",
    notas: [7, 7, 8, 9]
  }
];

let mediaDaNota = [];
alunos.forEach((aluno) => {
  (aluno.notas.reduce((nota, somaNotas) => {
    somaNotas = somaNotas + nota
    if (somaNotas >= 30) {
      console.log("A média do(a) ", aluno.nome, " é de:", somaNotas / 4)
      mediaDaNota.push({ nome: aluno.nome, media: (somaNotas / 4) })
    }
    return somaNotas
  }, 0))
});

console.log(mediaDaNota);

