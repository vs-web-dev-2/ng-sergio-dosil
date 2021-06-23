import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrankfurterService {
  private url = 'http://api.frankfurter.app/latest';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public obtenerCotizaciones$() {
    return this.http.get(this.url);
  }
}
