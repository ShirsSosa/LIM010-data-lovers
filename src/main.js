const contrasenaCorrecta = 'LABORATORIA';
const usuarioCorrecto = 'LABORATORIA';
const inicioSesion = document.getElementById('inicio-sesion');
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const ingresa = document.getElementById('btt-ingresa');
const mostrarHeader = document.getElementById('header');
const mostrarFooter = document.getElementById('footer');
const listaDePokemones = document.getElementById('pantalla-principal');//en la segunda pantalla, despues e login
const poke= POKEMON.pokemon; //array
const todosPokemones = document.getElementById('mostrar-pokemones');//contenedor de pokemones
const close = document.getElementById('close');

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
     for (let i = 0 ; i < pokemon.length ; i++) {
         let llamar = `
         <div class='mostrar' name='pokemon' id=${pokemon[i].id}>
         <h1>${pokemon[i].name}</h1> 
         <img src='${pokemon[i].img}'/>
         <h2>${pokemon[i].num}</h2>
         </div>`;
         mostrar += llamar;
         }
         return mostrar;
};
todosPokemones.innerHTML = dataPokemones(poke); 
 //Función para ordenar de la ordenar alfabeticamente
 const sortAbc = document.getElementById('filtrado-az');
 sortAbc.addEventListener('change',() => {
     const pokeOrden = sortAZ(poke,sortAbc.value);
     todosPokemones.innerHTML =  dataPokemones(pokeOrden);
 });
//Función para ordenar de la ordenar por spwan
const sortNumSpawn = document.getElementById('filtrado-spawn');
sortNumSpawn.addEventListener('change',() => {
    const pokeOrden = sortSpawn(poke,sortNumSpawn.value);
    todosPokemones.innerHTML =  dataPokemones(pokeOrden);
});
//mostrar mi pokemones en el modal
todosPokemones.addEventListener('click',() =>{ //crear un evento en base a click en cada poke
    const pokemoncito = event.target.parentElement.id-1;
    if(event.target.parentElement.getAttribute('name') === 'pokemon'){
    //mostrando modal 
    document.getElementById('my-modal').classList.remove('hide');
    //insertando info-poke en modal
    document.getElementById('info-de-poke').innerHTML =  `
    <img class="imagenModal" src="${POKEMON.pokemon[pokemoncito].img}"/>
    <p class='nombrePokemoncito'> ${POKEMON.pokemon[pokemoncito].name}</p>
     <p>Peso: ${POKEMON.pokemon[pokemoncito].weight}</p> 
    <p>Altura: ${POKEMON.pokemon[pokemoncito].height}</p>    
    <p>Tipo: ${POKEMON.pokemon[pokemoncito].type}</p> `;
    }
    });
//cerrando modal (funcion)
close.addEventListener('click',() => {
    document.getElementById('my-modal').classList.add('hide');
});   
//Filtrar por tipo
/*tipopoke.addEventListener('change',() => {
    const anis = document.getElementById('tipopoke').value;
    let aguita = '';
    let arrar = [];
    arrar = tipoPoke(poke,anis);
    aguita = dataPokemones(arrar);
    todosPokemones.innerHTML = aguita;
});*/
const agua = document.getElementById('agua');
agua.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke,'Water');
    vacio= dataPokemones(arrar);
    todosPokemones.innerHTML = vacio;
});
const fuego = document.getElementById('fuego');
fuego.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke,'Fire');
    vacio = dataPokemones(arrar);
    todosPokemones.innerHTML = vacio;
});
const planta = document.getElementById('planta');
planta.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke,'Grass');
    vacio = dataPokemones(arrar);
    todosPokemones.innerHTML = vacio;
});
const roca = document.getElementById('roca');
roca.addEventListener('click', () => {
    let vacio = '';
    let arrar = [];
    arrar = tipoPoke(poke,'Rock');
    vacio = dataPokemones(arrar);
    todosPokemones.innerHTML = vacio;
});






















// const pintarPokemonesEnPantala = (pokemones) => {
//     let mostrar = ' ';
//     for (let i = 0; i < pokemon.length; i++) {
//         let llamar = ` 
//         <div class="mostrar">
//         <p> ${pokemon[i].num}</p>
//         <img src="${pokemon[i].img}"/>
//         <p> ${pokemon[i].name}</p>
//         <p> ${pokemon[i].type}</p>

//         </div> `;
//         mostrar += llamar;
//     }
//     return mostrar;
// };
// )
// pintarPokemonesEnPantala(
// todosPokemones.innerHTML = mostrarData(poke); */

/* const targetPoke = (pokemon) => {
    let mostrar = ' ';
    for (let i = 0; i < pokemon.length; i++) {
        for(let j = 0; j < pokemon[i].id.length; j++){
            if( pokemon[i].id[j] === ''){
                let llamar = ` 
        <div class="mostrar">
        <p> ${pokemon[i].num}</p>
        <img src="${pokemon[i].img}"/>
        <p> ${pokemon[i].name}</p>
        <p> ${pokemon[i].type}</p>

        </div> `;
        mostrar += llamar;
           }   }
    }
    return newArrayData;
} 
const mostrarTarget = document.getElementById('show-modal');
pokemon.target.innerHTML = targetPoke(poke); */


/* 
const mostrarPokeAgua = (pokemon) => {
    let mostrar = ' ';
    let array = [];
    array = mostrarAgua();
    console.log(array);
    for (let i = 0; i < pokemon.length; i++) {  
        let llamar = ` 
        <div class="mostrar">
        <p> ${pokemon[i].type}</p>
        </div> `;
        mostrar += llamar;
    }
    return mostrar;
};
 */
/* const agua = document.getElementById('agua');
agua.addEventListener('click', () => {
    agua.innerHTML = mostrarPokeAgua(poke);
}); */