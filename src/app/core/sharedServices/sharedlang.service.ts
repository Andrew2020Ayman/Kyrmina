import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class SharedLangService{


  private Lang = new BehaviorSubject("ar");
  currentLang = this.Lang.asObservable();

  constructor() {}

  changeType(langoption: string) {
    this.Lang.next(langoption);
  }

  getLang(){
      return this.Lang.value;
  }
}