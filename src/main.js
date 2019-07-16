const passwordTrue = 'LABORATORIA';
const userTrue = 'LABORATORIA';
const login = document.getElementById('login');
const user = document.getElementById('user');
const password = document.getElementById('password');
const bttEnter = document.getElementById('btt-enter');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const mainScreen = document.getElementById('main-screen');// pantalla principal donde se visualizan los 151 pokemones
const poke = POKEMON.pokemon; // array de la data POKEMON.pokemon
const allPokemones = document.getElementById('show-pokemones');// contenedor de los 151 pokemones
const close = document.getElementById('close');
const counterPokemones = document.getElementById('counter-pokemones');
let numberOfAttemps = 0;
const tipoPokemonSeleccionado = document.getElementById('types-pokemons');
let arrayToFilter = poke;

const validate = () => {
  if (password.value === passwordTrue && user.value === userTrue) {
    login.classList.add('hide');
    mainScreen.classList.remove('hide');
    header.classList.remove('hide');
    footer.classList.remove('hide');
    event.preventDefault();
  } else {
    if (numberOfAttemps < 1) {
      password.value = '';
      numberOfAttemps++;
    }
  }
};
bttEnter.addEventListener('click', validate);
/* pprincipal: Con esta funcion ya tengo  el nombre y la imagen de todos mis pokemones en div*/
const dataPokemones = (pokemon) => {
  let show = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let call = `
         <div class="show" name="pokemon" id=${pokemon[i].id}>
         <h1 class="text-data">${pokemon[i].num}</h1> 
         <img class="img-data" src='${pokemon[i].img}'/>
         <h2 class="text-data">${pokemon[i].name}</h2>
         </div>`;
    show += call;
  }
  return show;
};

counterPokemones.classList.add('hide');
allPokemones.innerHTML = dataPokemones(poke);


// show mi pokemones en el modal
allPokemones.addEventListener('click', () => { // crear un evento en base a click en cada poke
  const eventIdPokemon = parseInt(event.target.parentElement.id);
  const arrayPokemon = poke.map((x) => {
    return x.id; 
  }).indexOf(eventIdPokemon);
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
  // mostrando modal 
    document.getElementById('my-modal').classList.remove('hide');
    // insertando info-poke en modal
    document.getElementById('');
    document.getElementById('info-pokemones').innerHTML = `
    <img class="img-modal" src="${POKEMON.pokemon[arrayPokemon].img}"/>
    <p class="name-Pokemones"> ${POKEMON.pokemon[arrayPokemon].name}</p>
    <p class="bar"></p>
    <div class="">
      <div class="">
        <p>Huevo: ${POKEMON.pokemon[arrayPokemon].egg}</p> 
      </div>
      <div class="">     
        <p>Hora de aparición: ${POKEMON.pokemon[arrayPokemon].spawn_time}</p>  
      </div>              
    </div> 
    <div class="dividir">
      <div class="">     
        <div class="">        
          <p>Tipo: ${POKEMON.pokemon[arrayPokemon].type}</p>       
        </div>     
        <div class="">             
          <p>Debilidades: ${POKEMON.pokemon[arrayPokemon].weaknesses}</p>
        </div>          
      </div>
        <div class="">  
          <p>Peso: ${POKEMON.pokemon[arrayPokemon].weight}</p> 
          <p>Altura: ${POKEMON.pokemon[arrayPokemon].height}</p>
        </div>
      </div>
    </div>`;
  }
  counterPokemones.classList.add('hide');
});
// cerrando modal (funcion)
close.addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('hide');
  counterPokemones.classList.add('hide');
});
// Filtro por tipo
tipoPokemonSeleccionado.addEventListener('click', (event)=>{
  const tipoSeleccionado = event.target.alt;
  const arrPokemonPorTipo = typesPokemones(poke, tipoSeleccionado);
  const string = dataPokemones(arrPokemonPorTipo);
  counterPokemones.classList.add('hide');
  allPokemones.innerHTML = string;
}); 
// Filtro por huevo
filtere.addEventListener('change', () => {
  const egg = document.getElementById('filtere').value;
  allPokemones.innerHTML = dataPokemones(eegPokemones(poke, egg));
  // mostrando porcentaje de los 151
  const counterPokemonesEgg = (eegPokemones(poke, egg).length) * 1.51;
  counterPokemones.classList.remove('hide');
  counterPokemones.innerHTML = counterPokemonesEgg;
});
// Filtro por debilidad en select
weakness.addEventListener('change', () => {
  const typeWeakness = document.getElementById('weakness').value;
  let empty = '';
  let arrarEmpty = [];
  arrarEmpty = weaknessPokemones(poke, typeWeakness);
  empty = dataPokemones(arrarEmpty);
  counterPokemones.classList.add('hide');
  allPokemones.innerHTML = empty;
});
// Filtro para buscar por nombre
const buttonSearch = document.getElementById('button-search');
let pokeSearch = '';
buttonSearch.addEventListener('click', () => {
  const pokeName = document.getElementById('poke-name').value;
  pokeSearch = window.searchPoke(poke, pokeName);
  let stringSearch = '';
  for (let i = 0; i < pokeSearch.length; i++) {
    stringSearch += `<div class="show" id=${pokeSearch[i].name}>
    <h1>${pokeSearch[i].name}</h1> 
    <img src='${pokeSearch[i].img}'/>
    <h2>${pokeSearch[i].num}</h2> 
    </div>`;
  }
  counterPokemones.classList.add('hide');
  allPokemones.innerHTML = stringSearch;
});
function openNav() {
  document.getElementById('types-pokemons').style.width = '250px';
}
function closeNav() {
  document.getElementById('types-pokemons').style.width = '0';
}
const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', () => {
  document.getElementById('types-pokemons').style.width = '0';
});
const btnopen = document.getElementById('btnopen');
btnopen.addEventListener('click', () => {
  document.getElementById('types-pokemons').style.width = '250px';
});
// Función para ordenar de la ordenar alfabeticamente
const sortAbc = document.getElementById('filter-az');

sortAbc.addEventListener('change', () => {
  const orderPokemones = sortAZ(arrayToFilter, sortAbc.value);
  counterPokemones.classList.add('hide');
  allPokemones.innerHTML = dataPokemones(orderPokemones);
});
// Función para ordenar de la ordenar por spawn
const sortNumSpawn = document.getElementById('filter-spawn');
sortNumSpawn.addEventListener('change', () => {
  const orderPokemones = sortSpawn(arrayToFilter, sortNumSpawn.value);
  counterPokemones.classList.add('hide');
  allPokemones.innerHTML = dataPokemones(orderPokemones);
});
