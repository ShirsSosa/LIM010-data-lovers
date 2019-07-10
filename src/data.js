const mostrarDatosPokemon = (array) => {
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
  
  window.mostrarDatosPokemon = mostrarDatosPokemon;
  
  //Función para mostrar caracteristica de pokemon en general
  
  //Función para ordenar de la AZ
  const sortAZ = (array, clickOrder) => {
    const sortName = array.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
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
  
  const sortSpawn = (array, clickOrder) => {
    const sortNum = array.sort((a, b) => {
      if (a.spawn_chance > b.spawn_chance) {
        return 1;
      }
      if (a.spawn_chance < b.spawn_chance) {
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
  //Filtrando objeto por tipo
  const tipoPoke = (array, condition) => {
    const filtroTipoPoke = array.filter(caracter => (caracter.type[0] === condition || caracter.type[1] === condition));
    return filtroTipoPoke;
  };
  window.tipoPoke = tipoPoke;
  //Filtrando por huevo
  const huevoPoke = (array, condition) => {
    const filtroHuevoPoke = array.filter(caracter => (caracter.egg[0] === condition || caracter.egg[1] === condition));
    return filtroHuevoPoke;
  };
  window.huevoPoke = huevoPoke;
  //Filtrando por debilidad
  const debilidadPoke = (array,condition) => {
    const filtroDebilidadPoke = array.filter(caracter => (caracter.weaknesses[0] === condition || caracter.weaknesses[1] === condition || caracter.weaknesses[2] === condition || caracter.weaknesses[3] === condition || caracter.weaknesses[4] === condition || caracter.weaknesses[5] === condition || caracter.weaknesses[6] === condition));
    return filtroDebilidadPoke;
  };
  window.debilidadPoke = debilidadPoke;