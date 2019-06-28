const contrasenaCorrecta = 'LABORATORIA';
const usuarioCorrecto = 'LABORATORIA';
const inicioSesion = document.getElementById('inicio-sesion');
const usuario= document.getElementById('usuario');
const contrasena= document.getElementById('contrasena');
const ingresa =document.getElementById ('btt-ingresa');
const listaDePokemones = document.getElementById('lista-de-pokemones');

 let nroIntentos = 0;  
const validar = () => {
    if (contrasena.value === contrasenaCorrecta && usuario.value === usuarioCorrecto) {
    inicioSesion.classList.add('hide');
    listaDePokemones.classList.replace('hide', 'show');
    event.preventDefault();    
    } else {
    if (nroIntentos < 1) {
        contrasena.value = '';
        nroIntentos++;
    }
    }
    };

     ingresa.addEventListener('click', validar);