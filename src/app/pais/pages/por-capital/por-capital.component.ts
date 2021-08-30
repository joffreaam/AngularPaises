import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  placeholder: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService ) { }

  buscar( termino: string  ){
    
    this.hayError = false;
    this.termino = termino;
    
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( resp => {        
        this.paises = resp;
        
      }, (err) => {
        this.hayError = true;
        console.log('Error manejado');
        console.info(err);
        this.paises = [];
      });
  }

  sugerencias( termino: string){
    this.hayError = false;

    
  }

}
