import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  CurrentUrl;
  constructor( public translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private sharedLng:SharedLangService,
    private titleService: Title
    ){}

  ngOnInit() :void {

    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');

  }

 /*  checkLang(){
    this.CurrentUrl = window.location.href;
    console.log(this.CurrentUrl);
    let ArFound = this.CurrentUrl.search("ar");
    let EnFound = this.CurrentUrl.search("en");

    if(ArFound >= 0){
      this.translate.use('ar');
      this.translate.setDefaultLang('ar');
      this.titleService.setTitle("كيرمينا للكاوتشوك و البلاستيك");
      const dom: any = document.querySelector('body');
      dom.classList.add('rtl');
      const browserLang = this.translate.getBrowserLang();

    }else if(EnFound >= 0){
      const dom: any = document.querySelector('body');
      dom.classList.remove('rtl');
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      this.titleService.setTitle("Kyrmina For Rubber&Plastics ");
    }
  } */
}
