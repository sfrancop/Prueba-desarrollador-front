import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotoComponent } from './piloto.component';
import { NaveModule } from '../nave/nave.module';

@NgModule({
  imports: [
    CommonModule,
    NaveModule
  ],
  declarations: [PilotoComponent],
  exports: [PilotoComponent],
})

export class PilotoModule { }
