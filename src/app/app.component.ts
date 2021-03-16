import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'KyrminaCompany';
  constructor( private translate: TranslateService){}

  ngOnInit() :void {

    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const dom: any = document.querySelector('body');
    /* dom.classList.toggle('rtl'); */
  }
 
}
