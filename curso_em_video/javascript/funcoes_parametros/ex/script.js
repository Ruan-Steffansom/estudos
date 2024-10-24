let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // nosso vetor/array vai receber os dados diditados

//Função para verificar se o número digitado esta entre 1 e 100.
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true // não vai escrever nada na tela apenas vai ter um retorno verdadeiro validando o numero em questão.
    } else {
        return false
    }
}

//Função para verificar se o número digitado ja esta na lista.
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // se o numero analizado for encontrado na lista.
        return true
    } else {
        return false
    }
}

//Função para verificar se o número digitado ja esta na lista.
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {// o dado digitado será analisado e só vai ser adicionar na lista se ele for realmente um número e (!)não estiver na lista.
    valores.push(Number(num.value)) //adiconando valor ao nosso vetor/array.
    let item = document.createElement('option') //crinando um elemento do tipo 'option'. 
    item.text = `Valor ${num.value} adicionado.` // definindo que o item terá um valor de texto. 
    lista.appendChild(item) // adicionando nosso elemento a lista.
    res.innerHTML = '' //quando adicionar um elemento na lista, vai limpar o resultado (res).
    } else {
    alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = '' //limpar o campo de input sempre que adicionar ou der valor inválido
    num.focus() //manter o foco do cursor no campo de input sem precisar clicar.
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalElementos = valores.length
        let maiorValor = valores[0]
        let menorValor = valores[0]
        let soma = 0
        let media = 0

        for(let posicao in valores) { // for(para) ; in (dentro) --> para cada posição dentro de valores.

            soma += valores[posicao] //somar os valores adicionados.
            //verificando o maior e o menor número.

            if(valores[posicao] > maiorValor)
                maiorValor = valores[posicao]

            if(valores[posicao] < menorValor)
                menorValor = valores[posicao]
        }
        media = soma / totalElementos

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média entre todos os valores é igua a ${media}.</p>`
    }
}