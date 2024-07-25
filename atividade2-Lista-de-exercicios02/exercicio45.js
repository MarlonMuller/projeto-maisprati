/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

const myArray =["uva", "banana", "uva", "laranja", "banana", "uva"]

function countString (array) {
    const count = {}
    for(const str of array) {
        if(count[str]) {
            count[str]++
        } else {
            count[str] = 1
        }
    }
    return count
}

const myObject = countString(myArray)

console.log(myObject)