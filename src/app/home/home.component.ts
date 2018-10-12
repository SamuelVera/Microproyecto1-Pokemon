import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';

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
    .subscribe(data => {this.pokemons = data;
    console.log(this.pokemons)})
    console.log(this.pokemons);
  }

}
