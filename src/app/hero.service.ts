import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import { HEROES } from './mock-heroes';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';

@Injectable()//表示这个类可能拥有依赖注入
export class HeroService {

  constructor(private MessageService:MessageService) { };
  getHeroes():Observable<Hero[]> {
    this.MessageService.add('HeroService:fetcth 123');
    return of(HEROES);
  }
}
