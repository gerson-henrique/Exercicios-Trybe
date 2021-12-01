const myRemove = require('./ex03')

describe(`Primeira rodada de testes`,() =>{
    it('testa se a soma ocorre',() =>{
        expect( myRemove(15)).toBe('fizzbuzz')
        expect( myRemove(3)).toBe('fizz')
        expect( myRemove(5)).toBe('buzz')
        expect( myRemove(16)).toBe(16)
        expect( myRemove('a')).toBe(false)
       
    }) 



});

 