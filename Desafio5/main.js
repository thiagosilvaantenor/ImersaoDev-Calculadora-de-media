// Desafio 5: * Colocar a conta inteira da média em apenas uma linha

var nome = 'Thiago'

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 9

console.log(`Seja bem vindo ${nome}`)
console.log(
  `${(
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4
  ).toFixed(1)}`
)

/*console.log(
  (
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4
  ).toFixed(1)
)*/
