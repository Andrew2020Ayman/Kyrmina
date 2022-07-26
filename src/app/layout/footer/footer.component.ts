import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit  {

  @Input() footerPostion = "1";
  constructor(public router: Router , public translate:TranslateService) {

  }

  ngOnInit() {

     /* ---- set footer postion ---- */
     if(this.footerPostion == "1"){
      $('.FooterNav').css("bottom","0");
      $('.FooterNav').css("position","absolute");
      $('.FooterNav .footerDiv h3').css("color","rgba(255, 255, 255, 0.5)");
       $('.FooterNav .footerDiv h3 span').css("color","white");
       $('.socialDiv i').css("color","rgba(255, 255, 255, 0.5)");
    }
    else if(this.footerPostion == "2"){
      $('.FooterNav').css("position","relative");
      $('.FooterNav .footerDiv h3').css("color","#373737");
      $('.FooterNav .footerDiv h3 span').css("color","black");
      $('.socialDiv i').css("color","#373737");
    }

    else if(this.footerPostion == "3"){
      $('.FooterNav').css("bottom","unset");
      $('.FooterNav').css("position","absolute");
      $('.FooterNav .footerDiv h3').css("color","rgba(255, 255, 255, 0.5)");
       $('.FooterNav .footerDiv h3 span').css("color","white");
       $('.socialDiv i').css("color","rgba(255, 255, 255, 0.5)");
    }
    else if(this.footerPostion == "4"){
      $('.FooterNav').css("bottom","0");
      $('.FooterNav').css("position","absolute");
      $('.FooterNav .footerDiv h3').css("color","rgba(255, 255, 255, 0.5)");
       $('.FooterNav .footerDiv h3 span').css("color","white");
       $('.socialDiv i').css("color","rgba(255, 255, 255, 0.5)");
    }
    else if(this.footerPostion == "5"){
      $('.FooterNav').css("position","relative");
      $('.FooterNav .footerDiv h3').css("color","rgba(255, 255, 255, 0.5)");
       $('.FooterNav .footerDiv h3 span').css("color","white");
       $('.socialDiv i').css("color","rgba(255, 255, 255, 0.5)");
    }
  }

}
