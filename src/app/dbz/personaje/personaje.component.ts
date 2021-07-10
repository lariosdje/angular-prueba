import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interface/IPersonaje';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent  {

  constructor(private _dbzServices:DbzService) {

  }

  get personajes():IPersonaje[]{
    return this._dbzServices.personajes;
  }

  personajesHijo: IPersonaje[] = [];


}
