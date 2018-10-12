import { Observable } from 'rxjs';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  public pokemons = [];

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons()
    .subscribe(data => {this.pokemons = data;})
  }
}
