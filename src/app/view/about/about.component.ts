import { Component, OnInit } from '@angular/core';
import { AboutService, ChangeLangService } from 'src/app/core/sharedServices';

declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  fetchData = false;
  WhoDes="";
  WhatDes="";
  whatList=[];

  whoDesEn="";
  WhatDesEn="";
  whatListEn=[];
  currentLang ;
  constructor( private aboutServ:AboutService,public  changelngServ:ChangeLangService) {

   /*  let CurrentUrl = window.location.href;
    let ArFound = CurrentUrl.search("ar");
    let EnFound = CurrentUrl.search("en");
    if(ArFound >= 0){
      this.currentLang = 'ar';
    }else if(EnFound >= 0){
      this.currentLang = 'en';
    } */

  }
  ngOnInit(): void {
    document.querySelector('video').playbackRate = 1;

    /* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  }); */

  this.getData(()=>{
    this.fetchData = true;
  })
  }

  scrollFunc(){
    var elem = document.getElementById("Who");
    elem.scrollIntoView();
  }

getData(callback){
   let AboutData = this.aboutServ.getaboutData();
   this.WhoDes = AboutData.Who;
   this.WhatDes = AboutData.what;
   this.whatList = AboutData.whatList;
   this.whoDesEn = AboutData.WhoEn;
   this.WhatDesEn = AboutData.whatEn;
   this.whatListEn = AboutData.whatListEn;
   callback();
}

}
