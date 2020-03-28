import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../model/item';






@Injectable()
export class ProductService {

  private url: string = "http://localhost:8081/api/v1/products";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');





  constructor(private http: HttpClient) { }



  /**
   * Create a post request for the param
   * @param product param to send to the backend
   */
  postProduct(product: Item): Promise<Item> {
    return this.http
    .post(this.url, JSON.stringify(product), {headers: this.headers})
    .toPromise()
    .then(res => res as Item)
  }


  /**
   * Create a delete repost for the param
   * @param id param to sen to the backend
   */
  deleteProduct(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  /**
   * Create a get request to the backend
   */
  getProducts(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

   /**
   * Create a get request to the backend with the product id
   */
  getProductById(id): Observable<Item[]> {
    const url = `${this.url}/${id}`;
    return this.http.get<Item[]>(this.url);
  }

  /**
   * Create a get request to the backend with the product id
   */
  getProductByCategoryId(id): Observable<Item[]> {
    const url = `${this.url + "/category"}/${id}`;
    return this.http.get<Item[]>(url);
  }

}
