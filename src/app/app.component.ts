import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedLangService } from './core/sharedServices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'KyrminaCompany';
  constructor( public translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private sharedLng:SharedLangService
    ){}

  ngOnInit() :void {

    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
    console.log("app comp");
    const browserLang = this.translate.getBrowserLang();
    /* localStorage.setItem("lang","ar"); */
    
  }
 
}
