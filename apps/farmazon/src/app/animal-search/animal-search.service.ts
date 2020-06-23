import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animal';

/**
 * @deprecated 🚧 Work in progress.
 */
@Injectable({
  providedIn: 'root'
})
export class AnimalSearch {
  search({ keywords }: { keywords: string }): Observable<Animal[]> {
    throw new Error('🚧 work in progress!');
  }
}
