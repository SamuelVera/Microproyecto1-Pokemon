import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private _url: string = "/assets/pkmn_data/pokemon.json";

  constructor(private http: HttpClient) { 
  }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this._url);
    };
  }
