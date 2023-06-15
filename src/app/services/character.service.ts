import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@capacitor/core';

const baseUrl = `https://rickandmortyapi.com/api/character`;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  get(params: HttpParams) {
    return this.http.get<any[]>(baseUrl, { params });
  }

  getById(id: string) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }
}
