import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prods';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  private apiUrl: string = environment.baseUrl + 'people/';

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de pilotos y devuelve la informamcion del piloto con
   * el id especificado.
   * @param {number} id - id del piloto.
   * @returns {Observable} Respuests de la API.
   */
  public getPiloto(id: number): Observable<
    {
      'name': string,
      'height': string,
      'mass': string,
      'gender': string
    }> {
        return this.http.get<{
          'name': string,
          'height': string,
          'mass': string,
          'gender': string
        }>(this.apiUrl + id + '//?format=json');
      }

}
