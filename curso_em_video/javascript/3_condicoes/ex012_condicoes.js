// var hora = 19
// console.log(`Agora são exatamente ${hora} horas.`)
// if (hora < 12) {
//     console.log('Bom Dia!')
// }else if (hora <= 18) {
//     console.log('Boa Tarde!')
// }else {
//     console.log('Boa Noite!')
// } 


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 4 && hora < 12) {
    console.log('Bom Dia!')
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
}else if (hora >= 19 && hora <= 23){
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}
