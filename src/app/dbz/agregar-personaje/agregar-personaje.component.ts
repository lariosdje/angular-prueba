import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

import { IPersonaje } from '../interface/IPersonaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',

})
export class AgregarPersonajeComponent  {

  constructor(private _dbzServices:DbzService) {


  }

  @Input()
  NuevoPersonaje: IPersonaje = {
    nombre : "",
    poder: 0,
  }

  fromAgregar() {

    if (this.NuevoPersonaje.nombre.trim().length === 0) {
      console.error('Nombre obligatorio');
      return;
    }

    this._dbzServices.agregarPersonajeSer(this.NuevoPersonaje);

  }
}
