const sumTest = require('./ex01')

describe(`Primeira rodada de testes`,() =>{
    it('testa se a soma ocorre',() =>{
        expect(sumTest(4,5)).toBe(9)
    }) 

    it(`testa se a soma ocorre`,() => {
        expect(sumTest(0,0)).toBe(0)
    })

    it(`testa lançamento de erros`,() =>{
        expect(()=> sumTest(5,'5')).toThrowError('parameters must be numbers')
    })

});

 