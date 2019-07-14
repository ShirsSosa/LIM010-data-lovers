global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPokemons = 
[{
  'id': 1,
  'name': 'Bulbasaur',
  'type': [ 'Grass', 'Poison' ],
  'egg': '2 km',
  'spawn_chance': 0.69, 
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
}, {
  'id': 2,
  'name': 'Ivysaur',
  'type': ['Grass', 'Poison'],
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
}, {
  'id': 3,
  'name': 'Venusaur',
  'type': ['Grass', 'Poison'],  
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],  
}, {
  'id': 7,
  'name': 'Squirtle',
  'type': ['Water'],
  'egg': '2 km',
  'spawn_chance': 0.58,
  'weaknesses': ['Electric', 'Grass'],
}, {
  'id': 23,
  'name': 'Ekans',
  'type': ['Poison' ],
  'egg': '5 km',
  'spawn_chance': 2.27,
  'weaknesses': ['Ground', 'Psychic'],
}, {
  'id': 95,
  'name': 'Onix', 
  'type': ['Rock', 'Ground'],
  'egg': '10 km',
  'spawn_chance': 0.10,
  'weaknesses': ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel']
}
];
describe(sortAZ, () => {
  it('Deberia ser una función', () => {
    expect(typeof sortAZ).toEqual('function');
  });
  it('PokeFan debería ordenar de la A a la Z', () => {
    expect(sortAZ(dataPokemons, '0')[0].name).toEqual('Bulbasaur');
  }); 
  it('PokeFan debería ordenar de la Z a la A', () => {
    expect(sortAZ(dataPokemons, '1')[0].name).toEqual('Venusaur');
  });
  describe(sortSpawn, () => {
    it('Deberia ser una función', () => {
      expect(typeof sortSpawn).toEqual('function');
    });
    it('PokeFan debería ordenar Spawn ascendente', () => {
      expect(sortSpawn(dataPokemons, '1')[0].spawn_chance).toEqual(2.27);
    }); 
    it('PokeFan debería ordenar Spawn descendente', () => {
      expect(sortSpawn(dataPokemons, '0')[0].spawn_chance).toEqual(0.017);
    });
    describe(typesPokemones, () => {
      it('Deberia ser una función', () => {
        expect(typeof typesPokemones).toEqual('function');
      });
      it('PokeFan debería mostrar pokemon tipo planta', () => {
        expect(typesPokemones(dataPokemons, 'Grass')[0].type[0]).toEqual('Grass');
      });
      it('PokeFan debería mostrar pokemon tipo fuego', () => {
        expect(typesPokemones(dataPokemons, 'Water')[0].type[0]).toEqual('Water');
      });
      describe(weaknessPokemones, () => {
        it('Deberia ser una función', () => {
          expect(typeof weaknessPokemones).toEqual('function');
        });
        it('PokeFan debería mostrar pokemon con debilidad a la electricidad', () => {
          expect(weaknessPokemones(dataPokemons, 'Electric')[0].weaknesses[0]).toEqual('Electric');
        });
        it('PokeFan debería mostrar pokemon con debilidad al fuego', () => {
          expect(weaknessPokemones(dataPokemons, 'Fire')[0].weaknesses[0]).toEqual('Fire');
        });
        describe(eegPokemones, () => {
          it('Deberia ser una función', () => {
            expect(typeof weaknessPokemones).toEqual('function');
          });
          it('PokeFan debería mostrar los pokemones con huevos de 2 km', () => {
            expect(eegPokemones(dataPokemons, '2 km')[0].egg).toEqual('2 km');
          });
          it('PokeFan debería mostrar los pokemones con huevos de 5 km', () => {
            expect(eegPokemones(dataPokemons, '5 km')[0].egg).toEqual('5 km');
          });
          it('PokeFan debería mostrar los pokemones con huevos de 10 km', () => {
            expect(eegPokemones(dataPokemons, '10 km')[0].egg).toEqual('10 km');
          });
          it('PokeFan debería mostrar los pokemones sin huevos', () => {
            expect(eegPokemones(dataPokemons, 'Not in Eggs')[0].egg).toEqual('Not in Eggs');
          });
        });
      });
    });
  });
});