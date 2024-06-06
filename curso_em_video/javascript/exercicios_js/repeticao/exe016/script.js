function contar() {
    let inicio = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //se o usuario deixar de colocar algum dado dará erro e será exibido um alerta
        res.innerHTML = 'Impossível contar, faltam dados!'
        //alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let fm = Number(fim.value)
        let pss = Number(passo.value)
        if (pss <= 0) { //caso o passo receba 0 vamos disparar um alert e considerar que recebeu o valor 1.
            alert('Passo inválido! considerando PASSO 1')
            pss = 1
        }

        if (ini < fm) {
            //CONTAGEM CRESCENTE
            for (let contador = ini; contador <= fm; contador += pss) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (let contador = ini; contador >= fm; contador -= pss) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1} Fim!` //codigo do unicode emoji no js so funcona entre crase(``)
    }
}