import { promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

//importando css global
import './styles.css';

// promesaLenta.then(console.log);
// // promesaMedia.then(mensaje => {console.log(mensaje)
// // });
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


//PROMISE.RACE
Promise.race([promesaLenta, promesaMedia, promesaRapida])
.then(mensaje=> {
    console.log(mensaje);
}).catch()

