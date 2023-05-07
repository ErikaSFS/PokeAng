import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
 pokemon = {
  id: 1,
  name: 'bulbasaur',
  types: 'grass',
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  class: 'green',
 };

  constructor() { }

  ngOnInit(): void {
      
      
  }
}
