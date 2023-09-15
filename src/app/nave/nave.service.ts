import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prods';

@Injectable({
  providedIn: 'root'
})
export class NaveService {

  /**
   * Provee servicios relacionados al modulo nave.
   */

  private apiUrl = environment.baseUrl + 'starships/?format=json';

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de naves y la retorna en una estructura similar a
   * la que devuelve la API.
   */
  getNaves(): Observable<
  {
    'count': number,
    'next': string,
    'previous': null,
    'results': Array<{
                'name': string,
                'model': string,
                'cost_in_credits': string,
                'max_atmosphering_speed': string,
                'passengers': string,
                'cargo_capacity': string,
                'pilots': string[]
            }>
  }> {
    return this.http.get<{
                          'count': number,
                          'next': string,
                          'previous': null,
                          'results': Array<{
                                              'name': string,
                                              'model': string,
                                              'cost_in_credits': string,
                                              'max_atmosphering_speed': string,
                                              'passengers': string,
                                              'cargo_capacity': string,
                                              'pilots': string[]
                                            }>
                        }>(this.apiUrl);
    }

}
