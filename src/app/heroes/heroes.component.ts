import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService  } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero:Hero;
  selectHero(hero:Hero){
    this.selectedHero=hero;
  }
  constructor(private heroService:HeroService) {};
  
  ngOnInit() {
    this.getHeroes();
  };
  getHeroes():void{
    let _self=this; //这里有个坑,如果使用es6的=>那么this指向没有改变
    //但是如果使用匿名,那么注意了this的指向变了  
    this.heroService.getHeroes()
    .subscribe(function(h){
      _self.heroes = h
    });
  }
}
