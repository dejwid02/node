import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl:string = 'http://192.168.1.200:3000';
  
  constructor(private http: HttpClient) { }

  public play(stationUrl: string) {
    
   let url: string = this.baseUrl + '/play/' + encodeURIComponent(stationUrl);
   console.log('im playing' + url);
    this.http.get(url).toPromise();
  }

  public stop() { 
    let url: string = this.baseUrl + '/stop';
    this.http.get(url).toPromise();
   }
}
