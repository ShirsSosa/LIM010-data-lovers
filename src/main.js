const contrasenaCorrecta = 'LABORATORIA';
const usuarioCorrecto = 'LABORATORIA';
const inicioSesion = document.getElementById('inicio-sesion');
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const ingresa = document.getElementById('btt-ingresa');
const listaDePokemones = document.getElementById('lista-de-pokemones');
const poke = POKEMON.pokemon; //array
const todosPokemones = document.getElementById('mostrar-pokemones');
const mostrarHeader = document.getElementById('header');
const mostrarFooter = document.getElementById('footer');


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

/* Con esta funcion ya tengo solo el nombre y la imagen de todos mis pokemones*/
const dataPokemones = mostrarDatosPokemon(poke);
let mostrar = '';
for(let i = 0; i < dataPokemones.length; i++){
 todosPokemones.innerHTML += `
 <div class="mostrar">
 <h1>${dataPokemones[i].nombre}</h1> 
 <img id=${i+1} src= "${dataPokemones[i].imagen}"/>
 <h2>${dataPokemones[i].numero}</h2>
 </div>`;
};


const bulbasor =  document.getElementById('1');

bulbasor.addEventListener('click', (event) => {
  console.log(event.target.id);
  if(poke[0].id === parseInt(event.target.id)){
    console.log(poke[0]);
  }
});


/*const verTarget = document.getElementById('i');
verTarget.addEventListener('click', (event) =>{

})*/

//POKEMON.pokemon[i].multipliers
/*let atrapadosPoke = 0;
let noatrapadosPoke = 0;
for(let i = 0 ; i <poke.length ; i++){
    if(POKEMON.pokemon[i].multipliers==null)
    {
        noatrapadosPoke++;
        `
 <div class="mostrar">
 <h1>${dataPokemones[i].multipliers}</h1> 
 <img id=${i+1} src= "${dataPokemones[i].imagen}"/>
 <h2>${dataPokemones[i].numero}</h2>
 </div>`;
    }
};*/




//document.getElementById('noatrapados').innerHTML = noatrapadosPoke;


























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