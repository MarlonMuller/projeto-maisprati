/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

let pesoIdeal;
function CalcularPesoIdeal (altura, sexo){
    if(sexo == 'masculino'){
    pesoIdeal = 72.7 * altura - 58
}  else if (sexo == 'feminino') {
    pesoIdeal = 62.1 * altura - 44.7
} else {
    console.log('Sexo inválido. Por favor insira "masculino" ou "feminino".')
    return null
}
return pesoIdeal.toFixed(2)
}
    
console.log(CalcularPesoIdeal(1.70,'masculino'))



