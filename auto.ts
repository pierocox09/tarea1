

export interface Iauto
{
    id:number;
    modelo:string;
    marca:string;
    annio:number;
    precio:number;
}

export function totalautos(autos:Iauto[]):number {
    let contador :number =0;
    autos.forEach(producto =>{
        contador++;

    })
    return contador;

}



