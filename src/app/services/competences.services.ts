import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Competences} from '../classes/competences';

@Injectable({​​​
  providedIn: 'root'
}​​​)
export class CompetencesService {​​​

  constructor(private http: HttpClient) {​​​
    this.http.get<{​​​ comp: Competences[] }​​​>('assets/competences.json')
      .subscribe(data => {​​​
        localStorage.setItem('competences', JSON.stringify(data.comp));
    }​​​);
}​​​

getAllValues(): Observable<{ comp: Competences[]}> {
    return this.http.get('assets/competences.json') as Observable<{ comp: Competences[] }>;
  }
  private comp(): Competences[] {
    const competences = JSON.parse(localStorage.getItem('comp') as string) as Competences[] ?? [];
    return competences.map(s => new Competences(s));
  }
}


