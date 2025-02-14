const heroes = {
    capi:{  
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{  
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{  
        nombre: 'Spiderman',
        poder: 'La mejor reaccion a picaduras de arania'
    }
}

export const buscarHeroe = (id)=>{
    const heroe = heroes[id];


    return new Promise( ( resolve, reject )=>{
        if(heroe){
            resolve(heroe);  //se puede enviar tantos argumentos como se desee u objetos
        }else{
            reject(`Error, no existe un heroe con el id ${id}`);
        }
    });   //adentro se recibe un callback
}