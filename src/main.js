/* Manejo del DOM */
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
    listaDePokemones.classList.remove('hide');
    event.preventDefault();    
    } else {
    if (nroIntentos < 1) {
        contrasena.value = '';
        nroIntentos++;
    }
    }
    };
    
    ingresa.addEventListener('click', validar);

    
    let password = 0;
    const ingreso = document.getElementById("ingreso");
    ingreso.addEventListener("click",()=>{
      if(password<=3){
       const contrasena = document.getElementById("contrasena_lab").value;
       if (contrasena == "LABORATORIA") {
         document.getElementById("pantalla1").classList.add("hide");
         document.getElementById("pantalla2").classList.remove("hide");
       }
       else{
         document.getElementById("error").innerHTML=`Contraseña incorrecta, intente de nuevo <i class="fas fa-exclamation-circle"></i>` ;
         password=password + 1;
         document.getElementById("contrasena_lab").value="";  
         if(password>2){
           document.getElementById("error").innerHTML=`Numero de intentos excedidos, regrese en 6 horas <i class="fas fa-exclamation-circle"></i>`;
           document.getElementById("contrasena_lab").disabled = true;
           document.getElementById("ingreso").disabled = true;
         }}}}
    );     
   /* Manejo del DOM */