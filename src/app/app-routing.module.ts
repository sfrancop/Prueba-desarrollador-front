import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotoComponent } from './piloto/piloto.component';
import { NaveComponent } from './nave/nave.component';

const routes: Routes = [
  {path: 'piloto/:id', component: PilotoComponent},
  {path: '', component: NaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
