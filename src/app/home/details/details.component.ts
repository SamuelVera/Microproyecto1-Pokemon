import { PokemonService } from './../../pokemon.service';
import { Pokemon } from './../../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}

  private pokemon: Pokemon;

  ngOnInit(){
    this.getPokemon();
  }
  
  getPokemon(){
    const id = this.route.snapshot.paramMap.get('_id');
    console.log(id);
    this.pokemonService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
    console.log(this.pokemon);
  }

}
