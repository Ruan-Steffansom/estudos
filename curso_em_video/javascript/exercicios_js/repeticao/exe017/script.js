function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let numero = Number(num.value)
        let contador = 1
        tab.innerHTML = '' // antes de começar a mostrar a tabuada, vamos limpar a area da tabuada.
        while (contador <= 10) {
            let item = document.createElement('option') //criando um elemento 'option'
            item.text = `${numero} x ${contador} = ${numero * contador}`
            item.value = `tab${contador}` //saber qual o item foi selecionado
            tab.appendChild(item)
            contador++
        }
    }
}