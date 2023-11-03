import { Observable } from 'rxjs';
import { HeroService } from './../hero.service';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private HeroService: HeroService) {
    this.heroes = this.HeroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = this.heroes);
  }

}
