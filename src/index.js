import {buscarHeroe} from './js/callbacks'

//importando css global
import './styles.css';

const heroeId = 'capi';

buscarHeroe(heroeId, (err,heroe)=>{
    if (err) {
        console.error(err);
    }else{
        console.log('Callback llamado');
        console.log(heroe);
    }
});

