import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:3000/book";

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.url);
  }
  savebook(data: any) {
    return this.http.post(this.url, data);

  }
  deletebook(id: any) {

    return this.http.delete(`${this.url}/${id}`);


  }
}

