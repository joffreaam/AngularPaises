import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService) {
    
  }

  ngOnInit(): void {
    
    
    // this.activateRoute.params
    // .subscribe( params => {
    //   console.log(params.id);
      
    //   this.paisService.getPaisPorCodigo(params.id)
    //     .subscribe( pais => {
    //         console.log(pais);
    //     });

    // })

  this.activateRoute.params
    .pipe(
       switchMap(  ( param )  => this.paisService.getPaisPorCodigo( param.id ) )
       , tap( console.log )
    )
    .subscribe( pais => this.pais = pais );
      
  }

}
