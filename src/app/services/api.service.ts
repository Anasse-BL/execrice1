

import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private res: any;

  constructor(private http: HttpClient) {
  }


  // @ts-ignore
  // @ts-ignore
  postUser(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>('http://localhost:3000/posts')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts' +'/' +id)
      .pipe(map((res: any) => {
        return res;
      }))
  }



}
