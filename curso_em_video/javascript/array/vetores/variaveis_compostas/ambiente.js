let num =[5, 8, 2, 9, 3]
// num[5]=10  com este comando vamos adicionar o valor (10) na posição [5], se não tiver a posição o javascript vai criar uma posição e acresentar o valor a ela.
num.push(1)// esse método serve para adicionar um valor na ultima posição do nosso vetor.

console.log(`Nosso vetor é o ${num} e temos ${num.length} elementos.`) // .length não é um método e sim  e sim um atributo que serve para sabermos a quantidade de elementos que temos em nosso array.

console.log(`Esse e nosso array em ordem ${num.sort()}`)//usamos o método  .sort()  para ordenar de forma crescente os elementos que temos em nossa array.

console.log(`O primeiro valor é o ${num[0]}`)// com ( num[0] ), queremos mostrar o elemento que está na posição 0


let pos = num.indexOf(8) //usamos o método .indexOf() para buscar valores, ele nos retornará a posição que está o valor que declaramos nele, caso não exista o valor no nosso array, ele nos retornará o valor -1 indicando que não existe o valor que declaramos. 
console.log(`o valor 8 está na posição ${pos}`)

let pos2 = num.indexOf(10)
console.log(`o valor 10 está na posição ${pos2}`)


