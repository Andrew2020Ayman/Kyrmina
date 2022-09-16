import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

 Home = {
      title:"Kyrmina For Rubber",
      DESI:"We specialize in cylinder and roll cladding",
     Artitle:"كيرمينا للكاوتشوك",
     ArDESI:"نحن متخصصون فى كسوة الدرافيل و السلندرات",
    };

About = {
    ArTitle:"من نحن",
    ArAbout:" تعتبر كيرمينا ، التي تتمتع بخبرة تزيد عن الثلاثون عامًا ، رائدة في مجال صناعة الكاوتشوك. نحن متخصصون فى كسوة السلندرات و الدرافيل ، جميع منتجاتنا تتميز بخامات عالية الجودة و تشطيب ذا تقنية عالية .",
    Title:"About",
    About:" Kyrmina, with over thirty years of experience, is a pioneer in the rubber industry. We specialize in cylinder cladding and rollers, all of our products are characterized by high quality materials and high-tech finishing.",
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
            image:"../../../assets/products/kyrminaRoller.jpeg"
          },
          {
            id:5,
            image:"../../../assets/products/polyKyrmina.jpeg"
          },
          {
            id:6,
            image:"../../../assets/products/copyimg3.jpg"
          }
    ]
}



ArProducts=[
    {
        id:1,
        image:"../../../../assets/products/Roller-Products.jpg",
        title:" السلندرات و الدرافيل",
        titleEn:"Cylinders and rollers",
        EnDes:"We do the process of covering cylinders and rubber rollers with all kinds of raw materials, whether natural or industrial rubber or ebonite (EPDM) with the highest accuracy and the highest level of finishing.",
        ArDes:"نقوم بعملية كسوة السلندرات و الدرافيل الكاوتشوك بجميع انواع الخامات سواء الطبيعي او الكاوتش الصناعي او خامة الابونيت (EPDM) باعلي دقة و اعلي مستوي من التشطيب ."
      },
      {
        id:2,
        image:"https://i.pinimg.com/originals/88/a7/74/88a77416a928229a2d7a32c401fd3028.jpg",
        title:"المكبوسات والمسحوبات",
        titleEn:"Compressions & towing",
        EnDes:"We have all shapes and sizes required by the needs of factories",
        ArDes:"يتوفر لدينا جميع الاشكال و المقاسات التي يتطلبها احتياجات المصانع ",
      },
      {
        id:3,
        image:"http://www.lanphan.com/data/upload/201707/f_6a78fec765ebdad02b30159d642b8ec4.jpg",
        title:"التبطين بالكاوتشوك",
        titleEn:"Rubber lining",
        EnDes:"We do lining for all tanks and basins",
        ArDes:"نقوم بعملية التبطين لجميع التنكات و الاحواض"
      },
      {
        id:4,
        image:"https://www.rollerco.com/wp-content/uploads/2020/09/plasma-coated-rollers.jpg",
        title:" الدرافيل المعدنية",
        titleEn:"Metal rollers",
        EnDes:"We manufacture rollers and iron cylinders used in all factories",
        ArDes:"نفوم بتصنيع الدرافيل او السلندرات الحديد المستخدمة في جميع المصانع "
      },
      {
        id:5,
        image:"https://www.kraiburg-walzen.de/content/images/produkte/Silikonwalze.jpg",
        title:"سلندرات السيليكون",
        titleEn:"Silicon rollers",
        EnDes:"This material is characterized by withstanding high temperatures up to 350 degrees and withstands acid concentrations of up to 90% and is exposed to ultraviolet rays.",
        ArDes:"تتميز هذة الخامة بتحمل درجات الحرارة العالية تصل الي 350 درجة و تتحمل تركيز احماص تصل الي 90% و تتعرض للاشعة فوق البنفسجية."
      },
      {
        id:6,
        image:"../../../../assets/products/polyKyrmina.jpeg",
        title:"البولي يوريثان",
        titleEn:"polyurethane rollers",
        EnDes:"This material is characterized by superior strength to withstand pressures and friction",
        ArDes:"تتميز هذه الخامة بقوة فائقة لتحمل الضغوط و الاحتكاك "
      },
  /* https://www.jctprinting.com/Uploads/products/2019-02-20/en-S008--36-.jpg */
]


ArContact={
    MobileNum:"01223768216",
    MobileNumI:"01280624176",
    Email:"KyrminaRubber@gmail.com",
    Araddress:"16 ش ابو بكر الصديق - متفرع من شارع الشركات",
    address : "16 st Abo bakr el sedek - el sharekat",
    Arcity:" السلام - القاهرة, مصر",
    Encity:"El salam - Cairo , Egypt"
}

    constructor() { }

    getHomeData(){
        return this.Home;
    }
    getAboutData(){
        return this.About;
    }

    getProductData(){
        return this.ArProducts;
    }
    getContactData(){
        return this.ArContact;
    }

}
