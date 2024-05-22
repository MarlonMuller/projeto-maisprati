/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e  redução do INSS).
*/
const funcionarios = [
    { matricula: 1, nome: "João Silva", salarioBruto: 3000 },
    { matricula: 2, nome: "Maria Oliveira", salarioBruto: 4500 },
    { matricula: 3, nome: "Carlos Sousa", salarioBruto: 2500 },
    { matricula: 4, nome: "Ana Costa", salarioBruto: 5200 },
    { matricula: 5, nome: "Pedro Almeida", salarioBruto: 2700 },
    { matricula: 6, nome: "Bruna Souza", salarioBruto: 3100 },
    { matricula: 7, nome: "Ricardo Pereira", salarioBruto: 2800 },
    { matricula: 8, nome: "Sandra Lima", salarioBruto: 3200 },
    { matricula: 9, nome: "Tiago Fernandes", salarioBruto: 3500 },
    { matricula: 10, nome: "Fabiana Rocha", salarioBruto: 3600 },
    { matricula: 11, nome: "Felipe Araujo", salarioBruto: 3400 },
    { matricula: 12, nome: "Juliana Ribeiro", salarioBruto: 3300 },
    { matricula: 13, nome: "Rafael Martins", salarioBruto: 4100 },
    { matricula: 14, nome: "Paula Mendes", salarioBruto: 3700 },
    { matricula: 15, nome: "Lucas Carvalho", salarioBruto: 3800 },
    { matricula: 16, nome: "Fernanda Batista", salarioBruto: 3900 },
    { matricula: 17, nome: "Gabriel Lima", salarioBruto: 4000 },
    { matricula: 18, nome: "Renata Alves", salarioBruto: 3600 },
    { matricula: 19, nome: "Marcos Nogueira", salarioBruto: 4500 },
    { matricula: 20, nome: "Patricia Costa", salarioBruto: 4700 },
    { matricula: 21, nome: "Vinicius Duarte", salarioBruto: 4300 },
    { matricula: 22, nome: "Aline Barros", salarioBruto: 3800 },
    { matricula: 23, nome: "Vitor Souza", salarioBruto: 3900 },
    { matricula: 24, nome: "Cecilia Oliveira", salarioBruto: 3400 },
    { matricula: 25, nome: "Renato Castro", salarioBruto: 3200 },
    { matricula: 26, nome: "Larissa Silva", salarioBruto: 3100 },
    { matricula: 27, nome: "Marcelo Ribeiro", salarioBruto: 3500 },
    { matricula: 28, nome: "Natália Martins", salarioBruto: 3600 },
    { matricula: 29, nome: "Thiago Almeida", salarioBruto: 4000 },
    { matricula: 30, nome: "Raquel Fernandes", salarioBruto: 4100 },
    { matricula: 31, nome: "Alexandre Mendes", salarioBruto: 4500 },
    { matricula: 32, nome: "Camila Araujo", salarioBruto: 4600 },
    { matricula: 33, nome: "Rodrigo Lima", salarioBruto: 4200 },
    { matricula: 34, nome: "Daniele Souza", salarioBruto: 4700 },
    { matricula: 35, nome: "Gustavo Costa", salarioBruto: 4900 },
    { matricula: 36, nome: "Letícia Barros", salarioBruto: 5000 },
    { matricula: 37, nome: "Henrique Batista", salarioBruto: 3500 },
    { matricula: 38, nome: "Vanessa Carvalho", salarioBruto: 3700 },
    { matricula: 39, nome: "Eduardo Nogueira", salarioBruto: 3300 },
    { matricula: 40, nome: "Mariana Duarte", salarioBruto: 3400 },
    { matricula: 41, nome: "Leonardo Silva", salarioBruto: 3200 },
    { matricula: 42, nome: "Nicole Oliveira", salarioBruto: 3600 },
    { matricula: 43, nome: "Fábio Souza", salarioBruto: 3100 },
    { matricula: 44, nome: "Joana Pereira", salarioBruto: 3900 },
    { matricula: 45, nome: "Bruno Fernandes", salarioBruto: 4300 },
    { matricula: 46, nome: "Isabela Rocha", salarioBruto: 4700 },
    { matricula: 47, nome: "Caio Ribeiro", salarioBruto: 4900 },
    { matricula: 48, nome: "Talita Mendes", salarioBruto: 3500 },
    { matricula: 49, nome: "Diego Almeida", salarioBruto: 3700 },
    { matricula: 50, nome: "Simone Araujo", salarioBruto: 3900 },
    { matricula: 51, nome: "Rafael Martins", salarioBruto: 4100 },
    { matricula: 52, nome: "Ana Costa", salarioBruto: 4300 },
    { matricula: 53, nome: "Fernando Lima", salarioBruto: 4500 },
    { matricula: 54, nome: "Carla Barros", salarioBruto: 4700 },
    { matricula: 55, nome: "Ricardo Batista", salarioBruto: 4900 },
    { matricula: 56, nome: "Gabriela Carvalho", salarioBruto: 5000 },
    { matricula: 57, nome: "Samuel Nogueira", salarioBruto: 5200 },
    { matricula: 58, nome: "Tainá Duarte", salarioBruto: 5400 },
    { matricula: 59, nome: "Lucas Silva", salarioBruto: 5600 },
    { matricula: 60, nome: "Luana Oliveira", salarioBruto: 5800 },
    { matricula: 61, nome: "Wesley Souza", salarioBruto: 6000 },
    { matricula: 62, nome: "Viviane Pereira", salarioBruto: 6200 },
    { matricula: 63, nome: "José Fernandes", salarioBruto: 6400 },
    { matricula: 64, nome: "Sara Rocha", salarioBruto: 6600 },
    { matricula: 65, nome: "Felipe Ribeiro", salarioBruto: 6800 },
    { matricula: 66, nome: "Laura Mendes", salarioBruto: 7000 },
    { matricula: 67, nome: "Antônio Almeida", salarioBruto: 7200 },
    { matricula: 68, nome: "Daniela Araujo", salarioBruto: 7400 },
    { matricula: 69, nome: "João Lima", salarioBruto: 7600 },
    { matricula: 70, nome: "Tatiana Barros", salarioBruto: 7800 },
    { matricula: 71, nome: "Renato Batista", salarioBruto: 8000 },
    { matricula: 72, nome: "Lúcia Carvalho", salarioBruto: 8200 },
    { matricula: 73, nome: "Rogério Nogueira", salarioBruto: 8400 },
    { matricula: 74, nome: "Carolina Duarte", salarioBruto: 8600 },
    { matricula: 75, nome: "Sérgio Silva", salarioBruto: 8800 },
    { matricula: 76, nome: "Bruna Oliveira", salarioBruto: 9000 },
    { matricula: 77, nome: "Maurício Souza", salarioBruto: 9200 },
    { matricula: 78, nome: "Débora Pereira", salarioBruto: 9400 },
    { matricula: 79, nome: "Márcio Fernandes", salarioBruto: 9600 },
    { matricula: 80, nome: "Regina Rocha", salarioBruto: 9800 }
];

  function calcularINSS (salarioBruto) {
    return salarioBruto * 0.12
  }

  function calcularSalarioLiquido (salarioBruto, INSS) {
    return salarioBruto - INSS
  }

  function exibirContraCheques (funcionario) {
    const INSS = calcularINSS(funcionario.salarioBruto)
    const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, INSS)

    console.log(`Matrícula: ${funcionario.matricula}`)
    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Salário Bruto: R$ ${funcionario.salarioBruto}`)
    console.log(`INSS: R$ ${INSS}`)
    console.log(`Salário Líquido: R$ ${salarioLiquido}`)
    console.log("")
  }

  funcionarios.forEach(exibirContraCheques)