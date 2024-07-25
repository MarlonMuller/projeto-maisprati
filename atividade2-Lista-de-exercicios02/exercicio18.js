/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro
*/

function registro (nome, cargo, salario){
    return {
    nome: nome,
    cargo: cargo,
    salario: salario
    }
}

function lerRegistro (funcionario) {
    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Cargo: ${funcionario.cargo}`)
    console.log(`Salario: ${funcionario.salario}`)
}

let funcionario = registro('Marlon', 'Analista', 5000)
lerRegisto(funcionario)