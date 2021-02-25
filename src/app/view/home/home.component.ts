import { AfterViewChecked, AfterViewInit, Component, DoCheck, HostListener, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';


declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  @ViewChild('owlCar') carouselEl: CarouselComponent;
  
  /* ----------variables ------------- */
  customOptions: OwlOptions = {
    rtl: false,
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

  customOptionsII: any = {
    rtl: false,
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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.owl = false;
    setTimeout(() => {
      this.owl = true;
    }, 5);
  }
  /* ---------------------------------- */
  constructor() { }


  ngOnInit(): void {
  
    /* --------mouse move---------- */
    $(document).ready(function() {
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
    draggable:false
        
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


}
