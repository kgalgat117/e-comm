import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3000/'

  

}
