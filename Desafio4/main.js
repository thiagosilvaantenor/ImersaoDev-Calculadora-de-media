// Desafios: * Criar um conversor de temperaturas entre farenheit e celcius

// formula = ºC = ℉ - 32 / 1.8000

function ConversorFahrenheintCelcius(F) {
  let conta = (F - 32) / 1800

  let resultado = document.createElement('p')
  resultado.innerHTML = `Iniciando conversão... <br>
  Convertendo...<br>
  ${F} Graus em Fahrenheint são o mesmo que... <br>
  ${conta} Graus Celsius`
  document.querySelector('.result').appendChild(resultado)
}

ConversorFahrenheintCelcius(212)
