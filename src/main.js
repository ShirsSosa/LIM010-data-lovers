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

const mostrarData = (pokemon) => {
    let mostrar = ' ';
    for (let i = 0; i < pokemon.length; i++) {
        let llamar = ` 
        <div class="mostrar">
        <p> ${pokemon[i].num}</p>
        <img src="${pokemon[i].img}"/>
        <p> ${pokemon[i].name}</p>
        </div> `;
        mostrar += llamar;
    }
    return mostrar;
};
todosPokemones.innerHTML = mostrarData(poke);

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

const agua = document.getElementById('agua');
agua.addEventListener('click', () => {
    agua.innerHTML = mostrarPokeAgua(poke);
});