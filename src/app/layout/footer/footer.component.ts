import { Component, Input, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerPostion = "1";
  constructor() { }

  ngOnInit(): void {
    if(this.footerPostion == "1"){
      $('.FooterDiv').css("position","absolute")
    }
    else if(this.footerPostion == "2"){
      $('.FooterDiv').css("position","relative")
    }
  }

}
