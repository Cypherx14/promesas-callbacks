import {buscarHeroe} from './js/callbacks'

//importando css global
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'iron';

buscarHeroe(heroeId, (err,heroe)=>{
    if (err) {return console.error(err);}
    // }else{
    //     console.log('Callback llamado');
    //     console.log(heroe);
    // }
    buscarHeroe(heroeId2, (err, heroe2)=>{
        if (err) {return console.error(err);}
        console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
        
    });
});

