import { Injectable } from '@angular/core';
import { IPersonaje } from '../interface/IPersonaje';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _listadopersonajes: IPersonaje[] = [
    {
      nombre: 'Goku',
      poder: 90,
    },
    {
      nombre: 'Vegeta',
      poder: 80,
    },
  ];

  get personajes():IPersonaje[]{
    return this._listadopersonajes;
  }

  agregarPersonajeSer(perosonaje:IPersonaje):void{
    this._listadopersonajes.push(perosonaje);
  }

}
