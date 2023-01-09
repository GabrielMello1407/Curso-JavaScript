let num = [5, 8 , 2 ,9, 3]
//num.push(7) adiciona na ultima linha do array o valor
//num.length ve quantos elementos tem o array
//num.sort() coloca os elementos em ordem crescente ordenados
//num.indexOf comando que retorna a posição de onde está localizado o determinado valor
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
console.log (`O valor 8 está na posição ${pos}`)
}

//Funções são ações executadas assim que são chamadas ou em decorrência de algum evento
// Uma função pode receber parâmetros e retornar um resultado.