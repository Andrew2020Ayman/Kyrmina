import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/core/sharedServices';

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
  constructor( private aboutServ:AboutService) { }
  ngOnInit(): void {
    document.querySelector('video').playbackRate = 1;
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  this.getData(()=>{
    this.fetchData = true;
  })
  }
 
getData(callback){
   let AboutData = this.aboutServ.getaboutData();
   this.WhoDes = AboutData.Who;
   this.WhatDes = AboutData.what;
   this.whatList = AboutData.whatList;
   callback();
}
  
}
