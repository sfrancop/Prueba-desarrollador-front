import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveComponent } from './nave.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaveComponent],
  exports: [NaveComponent]
})

export class NaveModule { }
