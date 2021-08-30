import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right: 3px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  getClassCSS( region: string ){
    return (( region === this.regionActiva ) ? 'btn btn-primary': 'btn btn-outline-primary');
  }

  constructor( private paisService: PaisService){
  }

  activarRegion( region: string) {

    if ( region === this.regionActiva ) { return;}
    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscarRegion( this.regionActiva )
        .subscribe( paises => {
          this.paises = paises;
          console.log(this.paises);
        }, ( err ) => {
          this.hayError = true;
          console.log('Error manejado');
          console.info( err );
        });


  }

}
