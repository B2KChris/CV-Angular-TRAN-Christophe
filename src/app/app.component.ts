import { Component, OnInit } from '@angular/core';
import { Competences } from './classes/competences';
import { CompetencesService } from './services/competences.services';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent implements OnInit {
  title = 'CV';

  constructor() { }



  ngOnInit(): void {

  }


}




