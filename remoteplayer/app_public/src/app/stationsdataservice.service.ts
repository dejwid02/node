import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { Station } from './stationslist/stationslist.component';

@Injectable({
  providedIn: 'root'
})
export class StationsDataService {

  private baseUrl:string = 'http://192.168.1.200:3000';
  
  constructor(private http: HttpClient) { }

  public getStations() : Promise<Station[]> {
    
   let url: string = this.baseUrl + '/api/stations';
   
    return this.http.get(url).toPromise()
             .then(response => {
               console.log(response);
               return response as Station[]})
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
}

}
