let res = document.getElementById('res')
let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')
let botao3 = document.getElementById('botao3')
let botao4 = document.getElementById('botao4')

let botoes = [botao1, botao2, botao3, botao4]

function acao1(){
    botoes[0].style.background = 'green'
    res.innerHTML += `<p>Clicou no primeiro botão.</p>`
}

function acao2(){
    res.innerHTML += `<p>Clicou no segundo botão.</p>`
    botoes[1].style.background = 'blue'
}

function acao3(){
    botoes[2].style.background = 'yellow'
    res.innerHTML += `<p>Clicou no terceiro botão.</p>`
}

function acao4(){
    botoes[3].style.background = 'tomato'
    res.innerHTML += `<p>Clicou no quarto botão.</p>`
}