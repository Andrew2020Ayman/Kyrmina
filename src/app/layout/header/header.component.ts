import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(){
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
    })


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
            document.getElementById("LogoDiv").style.display="block"
            document.getElementById("LogoName").style.display = "block";
            document.getElementById("minmarginTop").style.display = "block";
            document.getElementById("nav-tgl").style.top = "-29px";
           }
         });

        
  }


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

}
