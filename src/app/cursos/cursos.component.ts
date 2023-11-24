import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-nave',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  cursos: Array<Curso> = [];
  cursosConCertificado: Array<number> = [];

  public getCursos() {


    this.cursoService.getCursos().subscribe(

      response => {

        for (let i = 0; i < response.length; i++) {

          let curso = response[i];

          let curso_object = new Curso(curso.id, curso.title, curso.platform, curso.launch_year, curso.duration_hours,curso.offers_certificate,curso.description,curso.image
                                    );
          
          if (curso.offers_certificate){
            this.cursosConCertificado.push(curso.id)
          }

          this.cursos.push(curso_object);
        }

      }

    );
  }

  ngOnInit() {
    /**
     * Contiene el codigo a ejecutar cuando se inicia el componente.
     */
    this.getCursos();
  }

}
