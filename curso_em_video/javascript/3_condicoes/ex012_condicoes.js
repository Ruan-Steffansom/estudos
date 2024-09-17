// var hora = 19
// console.log(`Agora são exatamente ${hora} horas.`)
// if (hora < 12) {
//     console.log('Bom Dia!')
// }else if (hora <= 18) {
//     console.log('Boa Tarde!')
// }else {
//     console.log('Boa Noite!')
// } 


var agora = new Date() // a variavel "agora" vai pegar o dado atual do nosso sistema através do new Date() 
var hora = agora.getHours() //a variavel "hora" vai receber o dado atual da hora atraves da nossa var "agora" seguida do método ".getHours"
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear() 

console.log(`Agora são exatamente ${hora}h:${minutos}min:${segundos}seg`)
console.log(`Do dia ${dia}/${mes}/${ano}`)

if (hora >= 5 && hora < 12) {
    console.log('Bom Dia!')
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
}else if (hora >= 19 && hora <= 23){
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}
