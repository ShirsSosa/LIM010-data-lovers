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

// Función para ordenar de la A la Z
const sortAZ = (array, clickOrder) => {
  const sortName = array.sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    } 
    else if (aa.name < bb.name) 
    {
      return -1;
    }
  });
  if (clickOrder === '0') {
    return sortName;
  } else if (clickOrder === '1') {
    return sortName.reverse();
  }
};

// Función para ordenar de por Spawn
const sortSpawn = (array, clickOrder) => {
  const sortNum = array.sort((aa, bb) => {
    if (aa.spawn_chance > bb.spawn_chance) {
      return 1;
    } 
    else if (aa.spawn_chance < bb.spawn_chance) {
      return -1;
    }
  });
  if (clickOrder === '0') {
    return sortNum;
  } else if (clickOrder === '1') {
    return sortNum.reverse();
  }
};

// Filtrando objeto por tipo de pokemon
const typesPokemones = (array, condition) => {
  return filterTypePokemones = array.filter(caracter => (caracter.type[0] === condition || caracter.type[1] === condition));
};

// Filtrando por huevo
const eegPokemones = (array, condition) => {
  return contadorHuevo = array.filter(caracter => caracter.egg === condition);
};

// Filtrando por debilidad
const weaknessPokemones = (array, condition) => {
  return filtroweaknessPokemones = array.filter(caracter => (caracter.weaknesses[0] === condition || caracter.weaknesses[1] === condition || caracter.weaknesses[2] === condition || caracter.weaknesses[3] === condition || caracter.weaknesses[4] === condition || caracter.weaknesses[5] === condition || caracter.weaknesses[6] === condition));
};

// Filtrando por nombre en buscador
const searchPoke = (array, condition) => {
  return array.filter(caracter => caracter.name === condition);
};

window.showDataPokemon = showDataPokemon;
window.sortAZ = sortAZ;
window.sortSpawn = sortSpawn;
window.typesPokemones = typesPokemones;
window.eegPokemones = eegPokemones; 
window.weaknessPokemones = weaknessPokemones;
window.searchPoke = searchPoke;

