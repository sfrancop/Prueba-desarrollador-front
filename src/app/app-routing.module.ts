import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotoComponent } from './piloto/piloto.component';
import { NaveComponent } from './nave/nave.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: 'piloto/:id', component: PilotoComponent},
  {path: '', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
