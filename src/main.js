let password = 0;
const btningresa = document.getElementById('btningresa');
btningresa.addEventListener("click", () => {
    if (password <= 3) {
        const contrasena = document.getElementById('contrasena').value;
        const usuario = document.getElementById('usuario').value
        if (contrasena == 'LABORATORIA' && usuario == 'LABORATORIA') {
            document.getElementById('iniciosesion').classList.add('hide');
            document.getElementById('data').classList.remove('hide');
        } else {
            document.getElementById("error").innerHTML = `Contraseña incorrecta, intente de nuevo <i class="fas fa-exclamation-circle"></i>`;
            password = password + 1;
            document.getElementById('contrasena').value = "";
            if (password > 2) {
                document.getElementById("error").innerHTML = `Numero de intentos excedidos, regrese en 6 horas <i class="fas fa-exclamation-circle"></i>`;
                document.getElementById('contrasena').disabled = true;
                document.getElementById('bttingresa').disabled = true;
            }
        }
    }
});