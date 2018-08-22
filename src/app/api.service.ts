import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getShoppingItems() {
    return this.http.get(this.apiRoot.concat('shopping-item/'));
  }
}
