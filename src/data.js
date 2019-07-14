const showDataPokemon = (array) => {
  const newArrayDataPokemones = [];
  for (let i = 0; i < array.length; i++) {
    newArrayDataPokemones.push({
      id: array[i].id,
      nombre: array[i].name,
      imagen: array[i].img,
      numero: array[i].num,
    });
  };
  return newArrayDataPokemones;
};
window.showDataPokemon = showDataPokemon;
// Función para ordenar de la A la Z
const sortAZ = (array, clickOrder) => {
  const sortName = array.sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    }
    if (aa.name < bb.name) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return sortName;
  }
  if (clickOrder === '1') {
    return sortName.reverse();
  }
  return 0;
};
window.sortAZ = sortAZ;
// Función para ordenar de por Spawn
const sortSpawn = (array, clickOrder) => {
  const sortNum = array.sort((aa, bb) => {
    if (aa.spawn_chance > bb.spawn_chance) {
      return 1;
    }
    if (aa.spawn_chance < bb.spawn_chance) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return sortNum;
  }
  if (clickOrder === '1') {
    return sortNum.reverse();
  }
  return 0;
};
window.sortSpawn = sortSpawn;
// Filtrando objeto por tipo de pokemon
const typesPokemones = (array, condition) => {
  return filterTypePokemones = array.filter(caracter => (caracter.type[0] === condition || caracter.type[1] === condition));
};
window.typesPokemones = typesPokemones;
// Filtrando por huevo
const eegPokemones = (array, condition) => {
  return contadorHuevo = array.filter(caracter => caracter.egg === condition);
};
window.eegPokemones = eegPokemones; 
// Filtrando por debilidad
const weaknessPokemones = (array, condition) => {
  return filtroweaknessPokemones = array.filter(caracter => (caracter.weaknesses[0] === condition || caracter.weaknesses[1] === condition || caracter.weaknesses[2] === condition || caracter.weaknesses[3] === condition || caracter.weaknesses[4] === condition || caracter.weaknesses[5] === condition || caracter.weaknesses[6] === condition));
};
window.weaknessPokemones = weaknessPokemones;
// Filtrando por nombre en buscador
const searchPoke = (array, condition) => {
  return array.filter(caracter => caracter.name === condition);
};
window.searchPoke = searchPoke;
const namePoke = (array, condition) => {
  const newArr = array.filter(caracter => caracter.name === condition);
  return newArr[0].img;
};
window.namePoke = namePoke;
window.showDataPokemon = showDataPokemon;
window.sortAZ = sortAZ;
window.sortSpawn = sortSpawn;
window.typesPokemones = typesPokemones;
window.eegPokemones = eegPokemones; 
window.weaknessPokemones = weaknessPokemones;
window.searchPoke = searchPoke;
