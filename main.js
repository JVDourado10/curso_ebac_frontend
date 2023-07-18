const alunos = [
  {nome: 'Lucia', nota: '10'},
  {nome: 'Carlos', nota: '9'},
  {nome: 'Maria', nota: '8'},
  {nome: 'Joao', nota: '7'},
  {nome: 'Nicholas', nota: '6'},
  {nome: 'Luana', nota: '5'},
  {nome: 'Lucas', nota: '4'},
  {nome: 'Rafaela', nota: '3'}
]

const alunosAprovados = alunos.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota
  }
}).filter(aluno => {
  if(aluno.nota >= 6) {
    return aluno
  }
})

console.log(alunosAprovados);