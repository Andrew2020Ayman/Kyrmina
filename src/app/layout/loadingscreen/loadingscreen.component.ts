import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.component.html',
  styleUrls: ['./loadingscreen.component.scss']
})
export class LoadingscreenComponent implements OnInit {

  currentNum = 0;
  radnum = 200;
  strokenum = 5;
  constructor() { }
  ngOnInit(): void {

    this.plusnum(this.currentNum);
  }

  doSomethingWithCurrentValue(e){
    
  }

  plusnum(num){
    if(num < 100){
      num += 1;
      this.currentNum = num;
      setTimeout(() => {
        this.plusnum(num);
      }, 30);
      
    }
    else if(this.radnum > 0) {
      setTimeout(() => {
        this.radnum -= 1;
        this.strokenum -= 0.2
        this.plusnum(num);
      }, 5);
      
    }
    else{
      setTimeout(() => {
       $('.overlay').css("opacity","1"); 
      }, 100);
      
      setTimeout(() => {
        $('.overlay').css("height","100%"); 
        $('.overlay').css("bottom","0");
       
       }, 500);
       setTimeout(() => {
        $('.overlay').css("border-top-left-radius","0");
        $('.overlay').css("border-top-right-radius","0");
        
       }, 800);
       setTimeout(() => {
        $('.loadingScreen').css("display","none"); 
       }, 1500);
      
    }
  }
}
