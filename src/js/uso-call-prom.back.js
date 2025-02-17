import {buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import {buscarHeroe } from './js/promesas';
//importando css global
import './styles.css';

const heroeId = 'capi1';
const heroeId2 = 'iron2';


// buscarHeroe(heroeId).then(heroe =>{
//     console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then(heroe2=>{
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

//se puede resumir de esta manera
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2])=>{
    // console.log('promise.all', heroes);
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
}).catch(err =>{
    alert(err);
}).finally(()=>{
    console.log('Se termino el promise.all');
    
});


console.log('Fin de programa');


// buscarHeroe(heroeId, (err,heroe)=>{
//     if (err) {return console.error(err);}
//     // }else{
//     //     console.log('Callback llamado');
//     //     console.log(heroe);
//     // }
//     buscarHeroe(heroeId2, (err, heroe2)=>{
//         if (err) {return console.error(err);}
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
        
//     });
// });

