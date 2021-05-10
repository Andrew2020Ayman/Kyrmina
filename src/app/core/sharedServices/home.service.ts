import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

 ArHome = {
     title:"كيرمينا",
     DESI:"نحن متخصصون فى كسوة الدرافيل و السلندرات",
     DESII:""
    };

ArAbout = {
    About:" تعتبر كيرمينا ، التي تتمتع بخبرة تزيد عن الثلاثون عامًا ، رائدة في مجال صناعة الكاوتشوك و البلاستيك. نحن متخصصون فى كسوة السلندرات و الدرافيل ، جميع منتجاتنا تتميز بخامات عالية الجودة و تشطيب ذا تقنية عالية .",
    images:[
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
}
ArProducts=[
    {
        id:1,
        image:"../../../../assets/products/Roller-Products.jpg",
        title:" السلندرات و الدرافيل",
        Des:"نقوم بعملية كسوة السلندرات و الدرافيل الكاوتشوك بجميع انواع الخامات سواء الطبيعي او الكاوتش الصناعي او خامة الابونيت (EPDM) باعلي دقة و اعلي مستوي من التشطيب ."
      },
      {
        id:2,
        image:"https://i.pinimg.com/originals/88/a7/74/88a77416a928229a2d7a32c401fd3028.jpg",
        title:"المكبوسات والمسحوبات",
        Des:"يتوفر لدينا جميع الاشكال و المقاسات التي يتطلبها احتياجات المصانع "
      },
      {
        id:3,
        image:"http://www.lanphan.com/data/upload/201707/f_6a78fec765ebdad02b30159d642b8ec4.jpg",
        title:"التبطين بالكاوتشوك",
        Des:"نقوم بعملية التبطين لجميع التنكات و الاحواض"
      },
      {
        id:4,
        image:"https://www.rollerco.com/wp-content/uploads/2020/09/plasma-coated-rollers.jpg",
        title:" الدرافيل المعدنية",
        Des:"نفوم بتصنيع الدرافيل او السلندرات الحديد المستخدمة في جميع المصانع "
      },
      {
        id:5,
        image:"https://www.kraiburg-walzen.de/content/images/produkte/Silikonwalze.jpg",
        title:"سلندرات السيليكون",
        Des:"تتميز هذة الخامة بتحمل درجات الحرارة العالية تصل الي 350 درجة و تتحمل تركيز احماص تصل الي 90% و تتعرض للاشعة فوق البنفسجية."
      },
      {
        id:6,
        image:"https://www.danskgummi.com/wp-content/uploads/2020/08/PU-polyurethane-rollers-640x640.jpg",
        title:"البولي يوريثان",
        Des:"تتميز هذه الخامة بقوة فائقة لتحمل الضغوط و الاحتكاك "
      },
  /* https://www.jctprinting.com/Uploads/products/2019-02-20/en-S008--36-.jpg */
]
ArContact={
    MobileNum:"01235487921",
    Email:"ouremail@domain.com",
    address:"ش حسن عمران- اخر جسر السويس 15  "
}
/*  EngHome:{
    title:"Kyrmina",
    DESI:"We specialize in covering dolphins and cylinders",
    DESII:""
 }
      */
    constructor() { }

    getHomeData(){
        return this.ArHome;
    }
    getAboutData(){
        return this.ArAbout;
    }
    getProductData(){
        return this.ArProducts;
    }
    getContactData(){
        return this.ArContact;
    }

}