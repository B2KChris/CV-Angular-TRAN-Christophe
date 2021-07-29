import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'experiences',
    loadChildren: ()=>import('./experiences/experiences.module').then(m=>m.ExperiencesModule)
  },

  {
    path: 'formation',
    loadChildren: ()=>import('./formation/formation.module').then(m=>m.FormationModule)
  },

  
  {
    path: 'competences',
    loadChildren: ()=>import('./competences/competences.module').then(m=>m.CompetencesModule)
  },

  {
    path: 'centre-interets',
    loadChildren: ()=>import('./centre-interets/centre-interets.module').then(m=>m.CentreInteretsModule)
  },

  {
    path: 'contact',
    loadChildren: ()=>import('./contact/contact.module').then(m=>m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
