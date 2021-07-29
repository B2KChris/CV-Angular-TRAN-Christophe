import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesComponent } from './competences.component';
import { DataService } from '../data.service';


@NgModule({
  declarations: [
    CompetencesComponent
  ],

  providers: [
    DataService
  ],
  
  imports: [
    CommonModule,
    CompetencesRoutingModule
  ]
})
export class CompetencesModule { }
