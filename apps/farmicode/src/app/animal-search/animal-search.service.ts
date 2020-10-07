import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal, createAnimal } from '@farmazon/animal-core';

@Injectable({
  providedIn: 'root'
})
export class AnimalSearch {
  constructor(private _httpClient: HttpClient) {}

  search({ keywords }: { keywords: string }): Observable<Animal[]> {
    return this._httpClient
      .get<Partial<Animal>[]>('http://localhost:3000/', {
        params: {
          q: keywords
        }
      })
      .pipe(map(response => response.map(item => createAnimal(item))));
  }
}
