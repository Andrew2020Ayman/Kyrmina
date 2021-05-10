import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/core/sharedServices';

declare var $:any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 fetchData = false;
  slidenum = 0;
  slidesLen = '0';
  customOptions: any = {
    rtl: false,
    loop: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 1,
    margin:8,
    autoWidth:true,
    autoHeight: true,
    responsiveRefreshRate: 500,
    nav:false,
    animateOut:"animate__fadeOutUp",
    animateIn:"animate__bounceInLeft",
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

  customOptions1: any = {
    rtl: false,
    loop: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 1,
    margin:8,
    autoWidth:true,
    autoHeight: true,
    responsiveRefreshRate: 500,
    nav:false,
    animateOut:"animate__fadeOutUp",
    animateIn:"animate__bounceInLeft",
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

  productImages = [];
  EngproductImages=[
    {
      id:1,
      image:"https://www.precisionurethane.com/assets/images/content/urethane_rollers_gallery.jpg",
      title:"Rubber Rollers",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:2,
      image:"https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
      title:"Polyurethan Rollers",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:3,
      image:"https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
      title:"Silicon Rollers",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:4,
      image:"https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
      title:"Polyurethan Rollers",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },

  ];
  ArabicNumbers= ['۰','۱','۲','۳','٤','۵','۶','۷','۸','۹'];

  ArabicproductImages = [];
  /* ArabicproductImages=[
    {
      id:'۱',
      image:"https://www.precisionurethane.com/assets/images/content/urethane_rollers_gallery.jpg",
      title:"كسوة سلندرات",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:'۲',
      image:"https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
      title:"بولى يوريثان",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:'۳',
      image:"https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
      title:"سلندرات سيلكون",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },
    {
      id:'٤',
      image:"https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
      title:"انالوكس",
      Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
    },

  ]; */
  owl:boolean = true;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.owl = false;
    setTimeout(() => {
      this.owl = true;
    }, 5);
  }
  
  boolDR;
  constructor(public router:Router,private translate:TranslateService,private prodServ:ProductService) { 

    this.getProductData(()=>{
      this.fetchData = true;
      this.productImages = this.ArabicproductImages;
    })
    
     /*  let ProdLen = this.productImages.length;
      this.slidesLen = this.ArabicNumbers[ProdLen]; 
      let lang = this.translate.defaultLang;
      if(lang == 'ar'){
        this.slidesLen = this.ArabicNumbers[ProdLen]; 
        this.boolDR = 'rtl';
      }else{
        this.slidesLen = ProdLen.toString(); 
        this.boolDR = 'ltr';
      } */

  }

  rtl_slick(){
    let lang = localStorage.getItem("lang");
    if (lang === "ar") {
       return true;
    } else {
       return false;
    }}
    

    
  ngOnInit(): void {

    
    
    this.translate.onLangChange.subscribe(res=>{
      this.productImages = this.ArabicproductImages;
      let ProdLen = this.productImages.length;
  
        let currLang = this.translate.currentLang;
      if(currLang == 'ar'){

        this.slidesLen = this.ArabicNumbers[ProdLen]; 
     
      }else{

        this.slidesLen = ProdLen.toString(); 
      } 
      $('.myslider1').slick('refresh');
      $('.myslider2').slick('refresh');
      $('.myslider3').slick('refresh');
    }); 

    $(document).ready( () => {

     

      const $slider1 = $(".myslider1");
      $slider1
      .slick({
        rtl:this.rtl_slick(),
        slidesToScroll: 1,
        arrows: true,
        infinite:false,
        dots: false,
        draggable:true,
        cssEase: 'ease-in-out',
        speed:500 ,
        asNavFor: '.asnavForClass' ,
        prevArrow:"<a class='btn prevBtn' ><div class='arrowprevDiv noisy'><div class='left'></div><div class='leftTri'></div></div></a>",
        nextArrow: "<a class='btn nextBtn'><div class='arrownextDiv noisy'><div class='right'></div><div class='triangle'></div></div></a>" 
        });

        

      $slider1.on('beforeChange', (event, slick, currentSlide, nextSlide)=>{
        
        if(nextSlide === 0){
          $('.prevBtn').css("opacity","0"); 
        }
        else if(nextSlide === (slick.slideCount-1)){
          $('.nextBtn').css("opacity","0");
        }
        else{
          $('.prevBtn').css("opacity","1");
          $('.nextBtn').css("opacity","1");
        }
      });

      const $slider2 = $(".myslider2");
      $slider2
      .slick({
        rtl:this.rtl_slick(),
        slidesToScroll: 1,
        arrows: false,
        infinite:false,
        dots: false,
        draggable:true,
        asNavFor: '.asnavForClass'   
        });

      const $slider3 = $(".myslider3");
      $slider3
      .slick({
        rtl:this.rtl_slick(),
        slidesToScroll: 1,
        arrows: false,
        infinite:false,
        dots: false,
        draggable:false,
        speed:500 ,
        fade:true,
        asNavFor: '.asnavForClass'   
        });

        $slider1.on('aftreChange', (event, slick, currentSlide, nextSlide)=>{
        
          $slider1.slick({
            rtl: this.rtl_slick
          })
        });
        $slider2.on('aftreChange', (event, slick, currentSlide, nextSlide)=>{
        
          $slider2.slick({
            rtl: this.rtl_slick
          })
        });
        $slider3.on('aftreChange', (event, slick, currentSlide, nextSlide)=>{
        
          $slider3.slick({
            rtl: this.rtl_slick
          })
        });
    });
   
      

  }

  
  GoToProduct(slideId){
    this.router.navigateByUrl("Productitem/"+ slideId);
  }

  getProductData(callback){
    this.ArabicproductImages = this.prodServ.getproductData();
    callback();
  }
  /* activeSlides: SlidesOutputData;

  slidesStore: any[];


  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.slidenum =this.activeSlides.startPosition; 
    console.log(this.activeSlides);
    let id = this.activeSlides.startPosition;

  
    if(id === 0){
      $('.prevBtn').css("opacity","0"); 
    }
    else if(id === this.productImages.length-1){
      $('.nextBtn').css("opacity","0");
    }
    else{
      $('.prevBtn').css("opacity","1");
      $('.nextBtn').css("opacity","1");
    }
  } */


}

