/***************************************************************************************************
 * Objetivo: Arquivo responsável pela realização de TESTES UNITÁRIOS (UNIT TEST) do modulo referente
 *     a calculos matemáticos
 * Data: 24/02/2026
 * Autor DEV: Isabelle
 * Autor TEST: Isabelle
 * Versão 1.0
 ****************************************************************************************************/

const calculosMatematicos = require('../modulo/calculo.js')

//CENÁRIO DE TESTE 01 : Validação das entradas de dados para saber se é um número válido
test('Validação de entrada de dados númericos', function(){
    expect(calculosMatematicos.validarDados(5)).toBe(true)
    expect(calculosMatematicos.validarDados('6')).toBe(true)
    expect(calculosMatematicos.validarDados(6.6)).toBe(true)
    expect(calculosMatematicos.validarDados('6.6')).toBe(true)
    expect(calculosMatematicos.validarDados('6,6')).toBe(false)
    expect(calculosMatematicos.validarDados('6a')).toBe(false)
    expect(calculosMatematicos.validarDados('')).toBe(false)
    expect(calculosMatematicos.validarDados(null)).toBe(false)
    expect(calculosMatematicos.validarDados(undefined)).toBe(false)
})

//CENÁRIO DE TESTE 02: VALIDAÇÃO DA SOMA de dois números
test('Validação da SOMA de dois números;', function(){
    expect(calculosMatematicos.calcular(22,30, 'somar')).toBe(52)
    expect(calculosMatematicos.calcular('22','30', 'somar')).toBe(52)
    expect(calculosMatematicos.calcular(4.2, 3.5, 'somar')).toBe(7.7)
    expect(calculosMatematicos.calcular('4.2', '3.5', 'somar')).toBe(7.7)
    expect(calculosMatematicos.calcular(20, 30, 'soma')).toBe(false)    
    expect(calculosMatematicos.calcular(20, 30, 'SoMaR')).toBe(50)    

})

//CENÁRIO DE TESTE 03: VALIDAÇÃO DA SUBTRAÇÃO de dois números
test('Validação da SUBTRAÇÃO de dois números;', function(){
    expect(calculosMatematicos.calcular(22,30, 'subtrair')).toBe(-8)
    expect(calculosMatematicos.calcular('22','30', 'subtrair')).toBe(-8)
    expect(calculosMatematicos.calcular(4.2, 3.5, 'subtrair')).toBe(0.7)
    expect(calculosMatematicos.calcular('4.2', '3.5', 'subtrair')).toBe(0.7)
    expect(calculosMatematicos.calcular(20, 30, 'subtrai')).toBe(false)    
    expect(calculosMatematicos.calcular(20, 30, 'suBtrAir')).toBe(-10)    

})

//CENÁRIO DE TESTE 04: VALIDAÇÃO DA MULTIPLICAÇÃO de dois números
test('Validação da MULTIPLICAÇÃO de dois números;', function(){
    expect(calculosMatematicos.calcular(22,30, 'multiplicar')).toBe(660)
    expect(calculosMatematicos.calcular('22','30', 'multiplicar')).toBe(660)
    expect(calculosMatematicos.calcular(4.2, 3.5, 'multiplicar')).toBe(14.7)
    expect(calculosMatematicos.calcular('4.2', '3.5', 'multiplicar')).toBe(14.7)
    expect(calculosMatematicos.calcular(20, 30, 'multiplica')).toBe(false)    
    expect(calculosMatematicos.calcular(20, 30, 'MultiPliCar')).toBe(600)    

})

//CENÁRIO DE TESTE 05: VALIDAÇÃO DA DIVISÃO de dois números
test('Validação da DIVISÃO de dois números;', function(){
    expect(calculosMatematicos.calcular(22,30, 'dividir')).toBe(0.7)
    expect(calculosMatematicos.calcular('22','30', 'dividir')).toBe(0.7)
    expect(calculosMatematicos.calcular(4.2, 3.5, 'dividir')).toBe(1.2)
    expect(calculosMatematicos.calcular('4.2', '3.5', 'dividir')).toBe(1.2)
    expect(calculosMatematicos.calcular(20, 30, 'dividi')).toBe(false)    
    expect(calculosMatematicos.calcular(20, 30, 'DiViDir')).toBe(0.6)    

})