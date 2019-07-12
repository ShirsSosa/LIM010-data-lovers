const contrasenaCorrecta = 'LABORATORIA';
const usuarioCorrecto = 'LABORATORIA';
const inicioSesion = document.getElementById('inicio-sesion');
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const ingresa = document.getElementById('btt-ingresa');
const mostrarHeader = document.getElementById('header');
const mostrarFooter = document.getElementById('footer');
const listaDePokemones = document.getElementById('pantalla-principal');//en la segunda pantalla, despues e login
const poke = POKEMON.pokemon; //array
const todosPokemones = document.getElementById('mostrar-pokemones');//contenedor de pokemones
const close = document.getElementById('close');
const contador = document.getElementById('contador-poke');

let nroIntentos = 0;
const validar = () => {
    if (contrasena.value === contrasenaCorrecta && usuario.value === usuarioCorrecto) {
        inicioSesion.classList.add('hide');
        listaDePokemones.classList.remove('hide');
        mostrarHeader.classList.remove('hide');
        mostrarFooter.classList.remove('hide');
        event.preventDefault();
    } else {
        if (nroIntentos < 1) {
            contrasena.value = '';
            nroIntentos++;
        }
    }
};
ingresa.addEventListener('click', validar);
/* pprincipal: Con esta funcion ya tengo  el nombre y la imagen de todos mis pokemones en div*/
const dataPokemones = (pokemon) => {
    let mostrar = ' ';
    for (let i = 0; i < pokemon.length; i++) {
        let llamar = `
         <div class='mostrar' name='pokemon' id=${pokemon[i].id}>
         <h1 class='textData'>${pokemon[i].name}</h1> 
         <img class='imagenData' src='${pokemon[i].img}'/>
         <h2 class='textData'>${pokemon[i].num}</h2>
         </div>`;
        mostrar += llamar;
    }
    return mostrar;
};
contador.classList.add('hide');
todosPokemones.innerHTML = dataPokemones(poke);
//Función para ordenar de la ordenar alfabeticamente
const sortAbc = document.getElementById('filtrado-az');
sortAbc.addEventListener('change', () => {
    const pokeOrden = sortAZ(poke, sortAbc.value);
    contador.classList.add('hide');
    todosPokemones.innerHTML = dataPokemones(pokeOrden);
});
//Función para ordenar de la ordenar por spawn
const sortNumSpawn = document.getElementById('filtrado-spawn');
sortNumSpawn.addEventListener('change', () => {
    const pokeOrden = sortSpawn(poke, sortNumSpawn.value);
    contador.classList.add('hide');
    todosPokemones.innerHTML = dataPokemones(pokeOrden);
});
//mostrar mi pokemones en el modal
todosPokemones.addEventListener('click', () => { //crear un evento en base a click en cada poke
    const pokemo = parseInt(event.target.parentElement.id);
    const pokemoncito = poke.map(function (x) { return x.id; }).indexOf(pokemo);
    if (event.target.parentElement.getAttribute('name') === 'pokemon') {
        //mostrando modal 
        document.getElementById('my-modal').classList.remove('hide');
        //insertando info-poke en modal
        document.getElementById('')
        document.getElementById('info-de-poke').innerHTML = `
    <img class="imagenModal" src="${POKEMON.pokemon[pokemoncito].img}"/>
    <p class='nombrePokemoncito'> ${POKEMON.pokemon[pokemoncito].name}</p>
    <div>
      <div>
        <p>Peso: ${POKEMON.pokemon[pokemoncito].weight}</p> 
        <p>Altura: ${POKEMON.pokemon[pokemoncito].height}</p>
      </div>    
      <p>Tipo: ${POKEMON.pokemon[pokemoncito].type}</p> 
      <p>Huevo: ${POKEMON.pokemon[pokemoncito].egg}</p>
      <p>Debilidades: ${POKEMON.pokemon[pokemoncito].weaknesses}</p>

    </div>`;
    }
    contador.classList.add('hide');
});

//cerrando modal (funcion)
close.addEventListener('click', () => {
    document.getElementById('my-modal').classList.add('hide');
    contador.classList.add('hide');
});
//Filtrar por tipo
const agua = document.getElementById('agua');
agua.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Water');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const fuego = document.getElementById('fuego');
fuego.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Fire');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const planta = document.getElementById('planta');
planta.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Grass');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const roca = document.getElementById('roca');
roca.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Rock');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const tierra = document.getElementById('tierra');
tierra.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Ground');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const aire = document.getElementById('aire');
aire.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Flying');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const dragon = document.getElementById('dragon');
dragon.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Dragon');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const electrico = document.getElementById('electrico');
electrico.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Electric');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const fantasma = document.getElementById('fantasma');
fantasma.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Ghost');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const hielo = document.getElementById('hielo');
hielo.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Ice');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const insecto = document.getElementById('insecto');
insecto.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Bug');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const lucha = document.getElementById('lucha');
lucha.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Fighting');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const normal = document.getElementById('normal');
normal.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Normal');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const psiquico = document.getElementById('psiquico');
psiquico.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Psychic');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
const veneno = document.getElementById('veneno');
veneno.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke, 'Poison');
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
/*tipopoke.addEventListener('change',() => {
    const anis = document.getElementById('tipopoke').value;
    let aguita = '';
    let arrar = [];
    arrar = tipoPoke(poke,anis);
    aguita = dataPokemones(arrar);
    todosPokemones.innerHTML = aguita;
});*/
//Filtro por huevo
filtrohuevo.addEventListener('change', () => {
    const egg = document.getElementById('filtrohuevo').value;
    todosPokemones.innerHTML = dataPokemones(huevoPoke(poke, egg));
    //mostrando porcentaje de los 151
    const contadoPoke = (huevoPoke(poke, egg).length) * 1.51;
    contador.classList.remove('hide');
    contador.innerHTML = contadoPoke;
});
//filtro por debilidad en select
debilidad.addEventListener('change', () => {
    const debTipo = document.getElementById('debilidad').value;
    let vacio = '';
    let arrar = [];
    arrar = debilidadPoke(poke, debTipo);
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
//Filtro para buscar por nombre
const buttonSearch = document.getElementById('button-search');
let pokeSearch = '';
buttonSearch.addEventListener('click', () => {
    const pokeNombre = document.getElementById('poke-nombre').value;
    pokeSearch = window.searchPoke(poke, pokeNombre);
    let stringSearch = '';
    for (let i = 0; i < pokeSearch.length; i++) {
        stringSearch += `<div class="mostrar" id=${pokeSearch[i].name}>
    <h1>${pokeSearch[i].name}</h1> 
    <img src='${pokeSearch[i].img}'/>
    <h2>${pokeSearch[i].num}</h2> 
    </div>`;
    }
    contador.classList.add('hide');
    todosPokemones.innerHTML = stringSearch;
});
pokedex.addEventListener('change', () => {
    const pokeDex = document.getElementById('pokedex').value;
    let vacio = '';
    let arrar = [];
    arrar = miPoke(poke, pokeDex);
    vacio = dataPokemones(arrar);
    contador.classList.add('hide');
    todosPokemones.innerHTML = vacio;
});
