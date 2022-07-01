import { totalautos, Iauto } from './auto';


const listaautos :Iauto[] =[

    {
        id:1,
        modelo:'Jeannie',
        marca:'jean',
        annio:2007,
        precio:100000,
    },
    {
         id:2,
        modelo:'JeannieXD',
        marca:'jean',
        annio:2007,
        precio:100000,
    },
    {
        id:1,
        modelo:'Jeannie',
        marca:'jean',
        annio:2007,
        precio:100000,
    }

] ;

const total=totalautos(listaautos);
console.log(total);
