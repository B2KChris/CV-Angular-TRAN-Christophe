import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competences } from '../classes/competences';
import { DataService } from '../data.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  competences$!:Observable<Competences[]>;

  constructor(private dataCompetences: DataService) { }

  ngOnInit(): void {

    
    this.competences$=this.dataCompetences.getCompetences();
  }

}
