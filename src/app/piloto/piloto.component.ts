import { Component, OnInit } from '@angular/core';
import { Piloto } from './piloto';
import { ActivatedRoute } from '@angular/router';
import { NaveService } from '../nave/nave.service';
import { PilotoService } from './piloto.service';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.scss']
})

export class PilotoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private naveService: NaveService, private pilotoService: PilotoService) { }

  itemId: number = 0;
  pilotos: Map<number, Piloto> = new Map();
  piloto!: Piloto;

  getPiloto() {

    /**
     * Llama al servicio que consume la API de las naves, recorre los
     * pilotos de cada nave, encuentra el piloto que coincide con el id
     * que se quiere mostrar y despues llama a PilotoService para
     * encontrar la informacion del piloto con ese id.
    */

    this.naveService.getNaves().subscribe(
      response => {

        for (let i = 0; i < response.results.length; i++) {
          let nave = response.results[i];
          let pilotos = nave.pilots;

          for (let j = 0; j < pilotos.length; j++) {

            let piloto: string = pilotos[j];
            let piloto_id = parseInt(piloto.split('/')[5]);
            this.pilotoService.getPiloto(piloto_id).subscribe(
              dataa => {
                if (piloto_id == this.itemId){
                  this.piloto = new Piloto(piloto_id,
                                            dataa.name,
                                            parseFloat(dataa.height),
                                            parseFloat(dataa.mass),
                                            dataa.gender
                                          );
                }
              }
            )

          }

        }

      }
    );
  }

  ngOnInit() {

    /**
     * Contiene el codigo a ejecutar cuando se inicia el componente.
     */

    //Se obtiene y guarda el id de la ruta a la que se accedio.
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
    });

    this.getPiloto();

  }

}
