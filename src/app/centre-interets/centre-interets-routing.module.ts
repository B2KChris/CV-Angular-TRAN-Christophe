import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentreInteretsComponent } from './centre-interets.component';


const routes: Routes = [
  {
    path: '',
    component: CentreInteretsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreInteretsRoutingModule { }
