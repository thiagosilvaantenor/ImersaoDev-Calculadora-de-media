// Desafios: * Imprimir na própria página o resultado, ao invés do console
var nome = "Thiago"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 9
  
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

if(notaFixada < 6){
  let resultado = document.createElement("p")
  resultado.innerHTML =`Bem vindo ${nome} você foi REPROVADO, sendo a média final: ${notaFixada}`;

  document.querySelector(".result").appendChild(resultado);
} else{
  let resultado = document.createElement("p");
  resultado.innerHTML =`Bem vindo ${nome} você foi APROVADO, sendo a média final: ${notaFixada}`;
  
  document.querySelector(".result").appendChild(resultado);
}


