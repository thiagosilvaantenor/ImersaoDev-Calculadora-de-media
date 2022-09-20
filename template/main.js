var nome = 'Thiago'

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 9

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4

var notaFixada = notaFinal.toFixed(1)
console.log(notaFixada)

/* Desafios:
* Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
* Alterar o fundo da tela da maneira que achar mais legal
* Imprimir na própria página o resultado, ao invés do console
* Criar um conversor de temperaturas entre farenheit e celcius
* Colocar a conta inteira da média em apenas uma linha */