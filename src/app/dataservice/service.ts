import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class Service{


    private baseUrl = '/api/v1/categories';

    constructor(private http: HttpClient) { }
  
    getCategory(id: number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    
    createCategory(employee: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, employee);
    }
  
    updateCategory(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteCategory(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getCategoriesList(): Observable<any> {
        console.log("sfdasdfasdsf")
      return this.http.get(`${this.baseUrl}`);
    }
}