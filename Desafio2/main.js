var nome = 'Thiago'

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 9

var somaDasNotas =
  notaDoPrimeiroBimestre +
  notaDoSegundoBimestre +
  notaDoTerceiroBimestre +
  notaDoQuartoBimestre;
  
var notaFinal = somaDasNotas / 4

var notaFixada = notaFinal.toFixed(1)

if (notaFixada < 6) {
  let resultado = document.createElement('p');
  resultado.innerHTML = `Bem vindo ${nome} você foi REPROVADO, sendo a média final: ${notaFixada}`;

  document.querySelector(".result").appendChild(resultado);
} else {
  let resultado = document.createElement('p');
  resultado.innerHTML = `Bem vindo ${nome} você foi APROVADO, sendo a média final: ${notaFixada}`;

  document.querySelector(".result").appendChild(resultado);
}

// Desafios: * Alterar o fundo da tela da maneira que achar mais legal