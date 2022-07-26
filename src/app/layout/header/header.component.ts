import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLangService } from 'src/app/core/sharedServices';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentLang;
  currentVal;
  constructor(
        public translate: TranslateService,
        public router:Router,
        private titleService: Title,
        private changelngServ:ChangeLangService
        ) {}

  ngOnInit(){

    /* this.router.events.subscribe((val) => {
      this.checkLang();
    }); */

    const menu = document.querySelector('.menu');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
      menu.classList.toggle('active');
      let ActiveBool = menu.classList.contains('active');
      if(ActiveBool){
       this.openNav();
      }else{
        this.closeNav();
      }
    },{ passive: false});

    const listBtns = menu.querySelectorAll('.listItem');
       listBtns.forEach(element => {
          element.addEventListener('click', evt => {
            menu.classList.toggle('active');
            this.closeNav();
          })
        });


        $(window).scroll(function(){
           if($(this).scrollTop() >170){
             document.getElementById("LogoDiv").style.display="none"
             document.getElementById("LogoName").style.display = "none";
             document.getElementById("minmarginTop").style.display = "none";
            document.getElementById("nav-tgl").style.top = "0";
           }else{
            document.getElementById("LogoDiv").style.display="initial"
            document.getElementById("LogoName").style.display = "block";
            document.getElementById("minmarginTop").style.display = "block";
            document.getElementById("nav-tgl").style.top = "-29px";
           }
         });


         this.changelngServ.change_lang.subscribe((res) => {
          if (res == 'ar') {
            const dom: any = document.querySelector('body');
            dom.classList.add('rtl');
            this.currentLang = 'ar';
            this.currentVal = '2';
          } else {
            const dom: any = document.querySelector('body');
            dom.classList.remove('rtl');
            this.currentLang = 'en';
            this.currentVal = '1';
          }
        });

  }


  /* checkLang(){
    let CurrentUrl = window.location.href;
    let ArFound = CurrentUrl.search("ar");
    let EnFound = CurrentUrl.search("en");

    if(ArFound >= 0){
      const dom: any = document.querySelector('body');
      dom.classList.add('rtl');
      this.currentLang = 'ar';
      this.currentVal = '2';
    }else if(EnFound >= 0){
      const dom: any = document.querySelector('body');
      dom.classList.remove('rtl');
      this.currentLang = 'en';
      this.currentVal = '1';
    }
  } */

  /* ----------Menu Functions ---------- */
  openNav() {
    document.getElementById("myNav").style.width = "100%";
    setTimeout(() => {
      $('.overlay-content').css("opacity","1");
    }, 500);
  }
   closeNav() {
    $('.overlay-content').css("opacity","0");
    setTimeout(() => {
     document.getElementById("myNav").style.width = "0%";
    }, 500);

  }
  /* -------------------------------------- */


  getselectvalue(value){
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
    if(value == 1){
      this.translate.use('en');
      localStorage.setItem("lang","en");
      this.titleService.setTitle("Kyrmina For Rubber Products");
      this.changelngServ.change_lang.next('en');
      this.changelngServ.local_lenguage = 'en';

    }else if( value == 2){
      this.translate.use('ar');
      localStorage.setItem("lang","ar");
      this.titleService.setTitle("كيرمينا لمنتجات الكاوتشوك");
      this.changelngServ.change_lang.next('ar');
    this.changelngServ.local_lenguage = 'ar';
    }
  }
  GotoPage(pageNum){
    console.log(pageNum,this.currentLang);

    if(pageNum == 1){
      this.router.navigateByUrl('Home');
    }else if(pageNum == 2){
      this.router.navigateByUrl('About');
    }
    else if(pageNum == 3){
      this.router.navigateByUrl('Product');
    }
    else if(pageNum == 4){
      this.router.navigateByUrl('Contact');
    }

  }

}
