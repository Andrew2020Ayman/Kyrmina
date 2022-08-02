import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedLangService } from './core/sharedServices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'كيرمينا للكاوتشوك';
  CurrentUrl;
  constructor( public translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private sharedLng:SharedLangService,
    private titleService: Title,
    private metaTagService:Meta
    ){

      this.metaTagService.addTags([
         // {name:'keywords',content:'كيرمينا , Rubber, كاوتشوك, درافيل , سلندر, سلندرات , rollers , , kyrmina , المطاط , سيلكون, بولي يوريثان , polyurethane , كسوة , Cylinders , Silicon , Metal , حديد ,معادن '},
          {name:'robots',content:' index, follow'},
          {name:'author',content:' ايمن حنا'},
        //  {name:'description' , content:'كيرمينا لمنتجات الكاوتشوك و البلاستيك هي شركة رائدة في مجال صناعة الكاوتشوك لدينا خبرة تزيد عن الثلاثون عاماً داخل السوق المصري والعربي.نقوم بإنتاج جميع أنواع المطاط الطبيعي والصناعي المضاد  للأحماض والمواد البترولية والقلويات وخامة السليكون المضادة لدرجات الحرارة العالية و الأحماض وخامة البولي يوريثان المضادة  للضغوط و الاحتكاك و منتجات اخرى كثيرة. نعدكم بأفضل مستوى من الجودة العالية و إلتزامنا بأحدث وأدق المعاييرو المواصفات العالمية فى جميع خدامتنا. و حرصنا على خدمة ما بعد البيع أو أى إستشارات فنية .'}
        ]);
    }

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
