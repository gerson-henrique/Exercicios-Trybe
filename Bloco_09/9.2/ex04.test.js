const { getPokemonDetails } = require('./ex04');

describe('A função getPokemonDetails', (done) => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {

    const bug = new Error('Não temos esse pokémon para você :(')

    const callback = (Ok,NotOk) => {
    
      expect(Ok).toEqual(bug)
      done();
    }

    getPokemonDetails((poke) => poke.name === 'Pikachu',callback)

   
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const callback = (Ok,NotOk) => {
      expect(NotOk).toEqual("Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun")
      done();
    }

    getPokemonDetails((poke) => poke.name === 'Squirtle',callback)
   
  });
  });


 