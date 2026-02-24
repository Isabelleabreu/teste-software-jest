/*******************************************************************************
 * Objetivo: Arquivo responsável por funções que realiza calculos MATEMÁTICOS
 * DATA: 24/02/2026
 * Autor: Isabelle
 * Versão: 1.0
 ********************************************************************************/

//Função para validar a entrada de dados verificando a consistencia de um número
const validarDados = function(numero){
    if(numero == '' || isNaN(numero) || numero == null || numero == undefined)
        return false
    else
        return true
}

//Função para realizar os principais calculos matemáticos
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let tipoCalculo = String(operador).toUpperCase()
    let resultado

    if(tipoCalculo == 'SOMAR')
        resultado = valor1 + valor2
    else if(tipoCalculo == 'SUBTRAIR')
        resultado = valor1 - valor2
    else if(tipoCalculo == 'MULTIPLICAR')
        resultado = valor1 * valor2
    else if(tipoCalculo == 'DIVIDIR')
        resultado = valor1 / valor2
    else
        return false

    return Number(String(resultado).match(/^-?\d+(?:\.\d{0,1})?/)[0])

}

  module.exports = {
    validarDados,
    calcular
  }