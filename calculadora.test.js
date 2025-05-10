const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  let calculadora

  beforeEach(() => {
    calculadora = new Calculadora()
  })

  it('Deverá retornar a soma de dois números', () => {
    expect(calculadora.soma(5, 5)).toBe(10)
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calculadora.subtracao(4, 2)).toBe(2)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calculadora.multiplicacao(5, 10)).toBe(50)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calculadora.divisao(5, 5)).toBe(1)
  })
})