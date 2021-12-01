const myRemove = require('./ex02')

describe(`Primeira rodada de testes`,() =>{
    it('testa se a soma ocorre',() =>{
        expect( myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
        expect( myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
    }) 



});

 