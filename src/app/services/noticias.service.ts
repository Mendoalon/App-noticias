import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const { pais, categoria } = parametros;
    const URL = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=320b8f7a979847afa1a277e8d12c4a6d`


    return this.http.get(URL);

  }

}
