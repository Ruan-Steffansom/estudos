var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade >= 16 && idade <18 || idade > 65) { //neste caso não precisariamos digitar ( idade >= 16 ), pois pois ja foi declarado ( idade < 16 ), então se a idade não e menor que 16 obviamente ela é maior ou igual a 16.
        console.log('Voto opcional')
    }else {
        console.log('Voto obrigatorio')
    }
