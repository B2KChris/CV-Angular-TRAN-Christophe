import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competences } from './classes/competences';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient : HttpClient) {}

  public getCompetences ():Observable<Competences[]> {

    return this.httpClient.get<Competences[]>('assets/Json/competences.json');
  }
}

