import { Component, OnInit } from '@angular/core';
import { Nave } from './nave';
import { NaveService } from './nave.service';
import { Piloto } from '../piloto/piloto';
import { PilotoService } from '../piloto/piloto.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.scss']
})
export class NaveComponent implements OnInit {

  constructor(private naveService: NaveService, private pilotoService: PilotoService) { }

  naves: Array<Nave> = [];

  public getNaves() {

    /**
       * Llama al servicio que consume la API de las naves y las guarda en
       * el arreglo this.naves como objetos Nave con sus objetos Piloto.
       *
       * La informacion de los pilotos la encuentra usando a la vez el
       * servicio PilotoService.
    */

    this.naveService.getNaves().subscribe(

      response => {

        for (let i = 0; i < response.results.length; i++) {

          let nave = response.results[i];
          let pilotos = nave.pilots;
          let pilotos_lista: Piloto[] = [];

          for (let j = 0; j < pilotos.length; j++) {
            let piloto: string = pilotos[j];
            let piloto_id = parseInt(piloto.split('/')[5]);
            this.pilotoService.getPiloto(piloto_id).subscribe(
              dataa => {
                pilotos_lista.push(new Piloto(piloto_id,
                                              dataa.name,
                                              parseFloat(dataa.height),
                                              parseFloat(dataa.mass),
                                              dataa.gender)
                                  )
                      }
              )
            }

          let nave_object = new Nave(i, nave.name, nave.model,
                                      parseFloat(nave.cost_in_credits),
                                      parseFloat(nave.max_atmosphering_speed),
                                      parseFloat(nave.cargo_capacity),
                                      parseInt(nave.passengers),
                                      pilotos_lista
                                    );

          this.naves.push(nave_object);
        }

      }

    );
  }

  ngOnInit() {
    /**
     * Contiene el codigo a ejecutar cuando se inicia el componente.
     */
    this.getNaves();
  }

}
