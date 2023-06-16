import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class StatisticsService {
    private apiUrl = environment.apiUrl + 'statistics';
  
    constructor(private http: HttpClient) { }
  
    
  
  }
  