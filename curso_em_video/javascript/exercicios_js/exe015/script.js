function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // neste comando estamos atribuindo a variável (ano) o ano atual do nosso sistema.
    var fano =document.getElementById('txtano') //recuperando o valor que será recebido atraves da caixa e input.
    var res = document.querySelector('div#res') //recuperando o valor contido nesta div para depois substituir ele pelas escolhas que nosso usuario irá fazer
    if (fano.value.length ==0 || Number(fano.value) > ano) { //caso o usuario digite um ano que seja maior que o ano em que estamos, irar disparar um alert com a mensagem a baixo.
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex') //recuperando os input´s radio para obter o valor marcado (masculino [0], feminino [1]).
        var idade = ano - Number(fano.value) //calculo da idade
        var genero = '' //valor será atribuido pelo usuario atravez da escolha entre (MASCULINO e FEMININO)
        var img = document.createElement('img') //criando elemento 'img' atraves do javascript
        img.setAttribute('id', 'foto') //atribuindo o atributo (id = 'foto') no elemento 'img' que criamos.
        if (fsex[0].checked) { // checked/marcado/checado
            genero = 'Homem' //se o usuario marcar o sexo como Masculino.
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', './imagem/homem_bebe.jpg')
                document.getElementById('fundo').style.background = 'rgb(70, 142, 236)'
            } else if (idade <=21) {
                //JOVEM
                img.setAttribute('src', './imagem/homem_jovem.jpg')
                document.getElementById('fundo').style.background = 'rgb(70, 142, 236)'
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', './imagem/homem_adulto.jpg')
                document.getElementById('fundo').style.background = 'rgb(70, 142, 236)'
            } else {
                //IDOSO
                img.setAttribute('src', './imagem/homem_idoso.jpg')
                document.getElementById('fundo').style.background = 'rgb(70, 142, 236)'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher' // atribuiremos este vaalor se o usuario marcar o sexo como Feminino.
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', './imagem/mulher_bebe.jpg')
                document.getElementById('fundo').style.background = 'rgb(253, 119, 195)'
            } else if (idade <=21) {
                //JOVEM
                img.setAttribute('src', './imagem/mulher_jovem.jpg')
                document.getElementById('fundo').style.background = 'rgb(253, 119, 195)'
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', './imagem/mulher_adulta.jpg')
                document.getElementById('fundo').style.background = 'rgb(253, 119, 195)'
            } else {
                //IDOSO
                img.setAttribute('src', './imagem/mulher_idosa.jpg')
                document.getElementById('fundo').style.background = 'rgb(253, 119, 195)'
            }
        }
        res.style.textAlign = 'center' //o javascript irar centralizar este texto quando for execultado.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //(appendChild) para adicionar um elemento ( ( (img) ) expecificando qual o elemento vamos adicionar.
    }
}