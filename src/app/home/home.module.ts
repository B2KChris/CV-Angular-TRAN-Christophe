import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { FormationComponent } from '../formation/formation.component';
import { CompetencesComponent } from '../competences/competences.component';
import { CentreInteretsComponent } from '../centre-interets/centre-interets.component';
import { ContactComponent } from '../contact/contact.component';


@NgModule({
  declarations: [
    ExperiencesComponent,
    FormationComponent,
    CompetencesComponent,
    CentreInteretsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
