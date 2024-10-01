let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* 
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/


//FOR DE FORMA SIMPLIFICADA (ESSA SINTAXE DO FOR SO FUNCIONA PARA ARRAYS E OBJECT -- todo array em javascript é um object )

for(let posicao in valores){ // ( for -> para | in -> dentro/em ) para cada (posicao) dentro de (valores) vou mostrar o ( console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)  )
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
