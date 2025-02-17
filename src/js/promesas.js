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

const promesaLenta = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa Media');
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa Rapida');
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}