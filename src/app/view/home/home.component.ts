import { AfterViewChecked, AfterViewInit, Component, DoCheck, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ChangeLangService, HomeService } from 'src/app/core/sharedServices';
import { Location } from '@angular/common';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Router } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

 @ViewChild('owlCar') carouselEl: CarouselComponent;

  EmailForm: FormGroup;

  /* ----------variables ------------- */
  transBool = true;
  fetchData = true;
  customOptions: OwlOptions = {
    rtl:true,
    loop: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items: 2,
    margin:8,
    autoWidth:true,
    autoHeight: true,
    responsiveRefreshRate: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    }
  };
  customOptionsII: OwlOptions = {
    rtl:true,
    loop: true,
    dots: false,
    autoplay: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items: 1,
    nav:true,
    margin:8,
    autoWidth:true,
    autoHeight: true,
    responsiveRefreshRate: 500,

    navText: [ '<div class="owlPrev"></div>', '<div class="owlNext"></div>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  };

  HomeData={};
  AboutData={};
  ProductsData=[];
  ContactData={};

  AboutImages=[
    {
      id:1,
      image:"../../../assets/about/home2.png"
    },
    {
      id:2,
      image:"../../../assets/about/SiliconasSolidasPERFILES.png"
    },
    {
      id:3,
      image:"../../../assets/about/Westlandwerodampweb-1.png"
    },
    {
      id:4,
      image:"../../../assets/about/Westlandwerodampweb-1.png"
    }

  ]
  productImages=[
    {
      id:1,
      image:"https://www.precisionurethane.com/assets/images/content/urethane_rollers_gallery.jpg",
      title:"Paper Design",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:2,
      image:"https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
      title:"Paper Design",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:3,
      image:"https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
      title:"Summer Scape",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:4,
      image:"https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
      title:"Fire Cloud",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },

  ];
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  owl:boolean = true;
  mobileView = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //this.load();
    this.owl = false;
    setTimeout(() => {
      this.owl = true;
    }, 10);

    if(window.innerHeight > 770){
      this.mobileView = false;
    }else{
      this.mobileView = true;
    }
    /* --------mouse move---------- */

    /* $(document).ready(function() {
      if(window.innerHeight > 770){
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $("#slider").mousemove(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
       }
      }); */
    /* ----------------------------- */
  }
  /* ---------------------------------- */
  constructor( public translate:TranslateService,
               private homeServ:HomeService,
               private changelngServ:ChangeLangService,
               private location: Location,
               private toastr: ToastrService ,
               private fb : FormBuilder,
               public router:Router) {

  }

  load() {
    location.reload()
  }

  createEmailForm(){
    this.EmailForm = this.fb.group({
      from_name:['',Validators.required],
      form_email:['',Validators.required],
      message:['',Validators.required]
    });
  }
  ngOnInit(): void {
/* console.log(window.innerHeight); */

   this.createEmailForm();

  this.getData(()=>{
    this.fetchData = true;
  });

    /* --------mouse move---------- */


      $(document).ready(() => {


        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $("#slider").mousemove((e)=>{
          if(!this.mobileView){
          console.log("slider active");

                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
                }
        });


      });


    /* ----------------------------- */

 /* -------- slider part ---------- */
 $(document).ready(function () {
  const $slider = $(".myslider");
  $slider
  .on('init', () => {
    mouseWheel($slider)
  })
  .slick({

    slidesToScroll: 1,
    arrows: false,
    infinite:false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    draggable:false,
    cssEase: 'ease-in-out',
    speed:500
    });

    function mouseWheel($slider) {
      $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
    }
    function mouseWheelHandler(event) {
      event.preventDefault()
      const $slider = event.data.$slider
      const delta = event.originalEvent.deltaY
      if(delta > 0) {
        $slider.slick('slickNext')
      }
      else {
        $slider.slick('slickPrev')

      }
    }

});

/* ---------------------------------------------- */

}

getData(callback){

    this.HomeData = this.homeServ.getHomeData();
    this.AboutData = this.homeServ.getAboutData();
   this.ProductsData = this.homeServ.getProductData();
   this.ContactData = this.homeServ.getContactData();
   callback();
}

scrollFunc(){
  const $slider = $(".myslider");
  $slider.slick('slickNext');
}


 serviceID = 'default_service';
 templateID = 'template_wxfzprf';
 publicKey = 'pIZ0I9ba-VpinU8qV';

public sendEmail(e: Event) {
  if(this.EmailForm.valid){

    e.preventDefault();
  emailjs.sendForm(this.serviceID, this.templateID, e.target as HTMLFormElement, this.publicKey)
    .then((result: EmailJSResponseStatus) => {
      this.toastr.success('message sent successfully');
    }, (error) => {
      this.toastr.error('message failed to send');
    });

  }
}

GoToDetails(index){
  this.router.navigateByUrl("Productitem/"+ index);
}
}
