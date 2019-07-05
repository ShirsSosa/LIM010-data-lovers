const contrasenaCorrecta = 'LABORATORIA';
const usuarioCorrecto = 'LABORATORIA';
const inicioSesion = document.getElementById('inicio-sesion');
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const ingresa = document.getElementById('btt-ingresa');
const listaDePokemones = document.getElementById('lista-de-pokemones'); //en la segunda pantalla, despues e login
const poke = POKEMON.pokemon; //array
const todosPokemones = document.getElementById('mostrar-pokemones'); //contenedor de pokemones
const mostrarHeader = document.getElementById('header');
const mostrarFooter = document.getElementById('footer');
const filtrado = document.getElementById('filtrado');
let nroIntentos = 0;
const validar = () => {
  if (
    contrasena.value === contrasenaCorrecta &&
    usuario.value === usuarioCorrecto
  ) {
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
for (let i = 0; i < dataPokemones.length; i++) {
  todosPokemones.innerHTML += `
 <div class='mostrar'>
 <h1>${dataPokemones[i].nombre}</h1> 
 <img id=${i + 1} src='${dataPokemones[i].imagen}'/>
 <h2>${dataPokemones[i].numero}</h2>
 </div>`;
}
/* Función para ordenar de la AZ*/
const filtradoAZ = () => {
  const namePoke = [];
  const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for (let i = 0; i < abc.length; i++) {
    for (let j = 0; j < poke.length; j++) {
      if (abc[i] === poke[j].name[0]) {
        namePoke.push(poke[j]);
      }
    }
  }
  return namePoke;
};
filtrado.addEventListener('change', (event) => {
  if ('A-Z' === filtrado.value) {
    const orden = filtradoAZ();
    document.getElementById('demo').innerHTML = dataPokemones(orden);
    
  }
});
