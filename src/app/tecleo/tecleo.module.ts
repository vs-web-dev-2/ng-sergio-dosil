import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecleoComponent } from './tecleo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TecleoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TecleoComponent],
})
export class TecleoModule {}
