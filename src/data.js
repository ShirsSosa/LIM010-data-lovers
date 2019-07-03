/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const mostrarPokemones = (pokemon) => {
    const newArrayData = [];
    for (let i = 0; i < pokemon.length; i++) {
        newArrayData.push({
            nombre: pokemon[i].name,
            img: pokemon[i].img,
            numero: pokemon[i].num,
        })
    }
    return newArrayData;
};

window.data = mostrarPokemones;

const mostrarAgua = (pokemon) => {
    const newArrayData = [];
    for (let i = 0; i < pokemon.length; i++) {
        for(let j = 0; j < pokemon[i].type.length; j++){
            if( pokemon[i].type[j] === 'Water'){
                newArrayData.push({
                    'tipo': pokemon[i].type,
                });
            }
           
          }  
        
       
    }
    return newArrayData;
};

window.data = mostrarAgua;