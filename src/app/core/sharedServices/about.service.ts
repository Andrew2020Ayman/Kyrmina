import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

 About = {
     Who:`كيرمينا لمنتجات الكاوتشوك و البلاستيك هي شركة رائدة في مجال صناعة الكاوتشوك لدينا خبرة تزيد عن الثلاثون عاماً داخل السوق المصري والعربي.
     نقوم بإنتاج جميع أنواع المطاط الطبيعي والصناعي المضاد  للأحماض والمواد البترولية والقلويات وخامة السليكون المضادة لدرجات الحرارة العالية و الأحماض وخامة البولي يوريثان المضادة  للضغوط و الاحتكاك و منتجات اخرى كثيرة. نعدكم بأفضل مستوى من الجودة العالية و إلتزامنا بأحدث وأدق المعاييرو المواصفات العالمية فى جميع خدامتنا. و حرصنا على خدمة ما بعد البيع أو أى إستشارات فنية .   
     `,
     what:`نقدم فى كيرمينا منتجات متعددة تتميز بكفاءة عالية و جودة متميزة وفقاً للمعايير و المواصفات الدولية مثل:`,
     whatList:[
         "كسوة السلندرات و الدرافيل",
         "المكبوسات ",
         "المسحوبات",
         "التبطين بالكاوتشوك",
         "تصنيع الدرافيل المعدنية ",
         "السيلكون",
         "البولي يوريثان"
     ],
     WhoEn:`Kyrmina for rubber and plastic products is a leading company in the rubber industry.
     We have more than thirty years of experience in the Egyptian and Arab market.
      We produce all kinds of natural and synthetic rubber against acids, petroleum and alkali materials,
       silicone materials against high temperatures and acids, polyurethane materials against pressure and
        friction and many other products. We promise you the best level of high quality and our commitment
         to the latest and most accurate international standards and specifications in all our services.
          And we are keen on after-sales service or any technical advice.`,

    whatEn:`In Kyrmina, we offer multiple products that are characterized by high efficiency
           and outstanding quality in accordance with international standards and specifications, such as:`   ,
    
    whatListEn:[
        "Cylinders and rollers",
        "Compressions & towing",
        "Rubber lining",
        "Metal rollers",
        "Silicon rollers",
        "polyurethane rollers"
    ] 

    };



    constructor() { }

    getaboutData(){
        return this.About;
    }
}