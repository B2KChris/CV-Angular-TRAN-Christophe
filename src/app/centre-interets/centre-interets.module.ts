import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreInteretsRoutingModule } from './centre-interets-routing.module';
import { CentreInteretsComponent } from './centre-interets.component';


@NgModule({
  declarations: [
    CentreInteretsComponent
  ],
  imports: [
    CommonModule,
    CentreInteretsRoutingModule
  ]
})
export class CentreInteretsModule { }
