import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

ArProducts=[
    {
        id:1,
        image:"../../../../assets/products/Roller-Products.jpg",
        title:" السلندرات و الدرافيل",
        Des:`<p>نقوم بعملية كسوة السلندرات و الدرافيل الكاوتشوك بجميع انواع الخامات سواء الطبيعي او الكاوتش الصناعي او خامة الابونيت (EPDM) باعلي دقة و اعلي مستوي من التشطيب .
        لجميع انواع المصانع و جميع المقاسات حتي 7 متر و اقطار حتي 1م .
        المستخدمة في المجالات: <br>
        1. طباعة الاوفست(ويب-شيت) الخاصة بطباعة الصحف و المجلات و المطبوعات التجارية <br>
        2. طباعة الصفيح <br>
        3. طباعة الكرتون(درافيل طباعة-فيدررول) <br>
        4. الصباغة و التجهيز<br>
        5. الدباغة و الجلود  <br>
        6. مصانع طباعة البلاستيك(فلكسو-سحب الفيلم-المقصات)<br>
        7. مصانع الاخشاب(درافيل غرايات-صنفرة.....)<br>
        8. مصانع الفوم و الفويل(درافيل السحب و التشكيل)<br>
        9. مصانع طباعة الانابيب الطبية <br>
        10. مصانع المناديل الورقية<br>
        11. مصانع تصنيع الورق<br>
        </p>
        `
      },
      {
        id:2,
        image:"https://i.pinimg.com/originals/88/a7/74/88a77416a928229a2d7a32c401fd3028.jpg",
        title:"المكبوسات والمسحوبات",
        Des:`<h2> <p> المكبوسات</h2>
        صب جميع انواع المكبوسات من جميع انواع الخامات سواء الطبيعي او الصناعي او السيلكون او EPDM .
        يتوفر لدينا جميع الاشكال و المقاسات التي يتطلبها احتياجات المصانع سواء (بكره - تشكيلات خاصة - عجلات - جوانات – كاوتش فاكيوم- قواعد كاوتش - .....اي شكل اين كان). <br><br>
        
        <h2>المسحوبات </h2>
        سحب جميع انواع البروفيلات سواء كاوتش او بلاستيك من جميع الخامات مثل (الطبيعي_الصناعي-EPDM-PVC).
        </p>
        `
      },
      {
        id:3,
        image:"http://www.lanphan.com/data/upload/201707/f_6a78fec765ebdad02b30159d642b8ec4.jpg",
        title:"التبطين بالكاوتشوك",
        Des:`<p>
        نقوم بعملية التبطين لجميع التنكات و الاحواض و مواسير خطوط انتاج مصانع الفوسفات و جميع الكيماويات بخامات الكاوتشوك و الابونيت بأحدث تقنيات سواء علي البارد او بالبخار سواء في مصانعنا او داخل المصانع نفسها
        </p>
        `
      },
      {
        id:4,
        image:"https://www.rollerco.com/wp-content/uploads/2020/09/plasma-coated-rollers.jpg",
        title:" الدرافيل المعدنية",
        Des:`<p>
        نقوم بتصنيع الدرافيل او السلندرات الحديد المستخدمة في جميع المصانع وايضا نقوم بطلائها بالهارد كروم او النيكل كروم او عملية الجلفنة . <br>
        و تتميز في صناعة درافيل : <br><br>
        1-	 الانالوكس المستخدمة في طباعة الفلكسو سواء الشباكات 80 او 100. <br>
        2-	 درافيل النشا المستخدمة في مصانع الكارتون. <br>
        3-	 درافيل الهاردكروم الستخدمة في مصانع البلاستيك. <br>
        4- اعادة طلاء قطع غيار المصانع بالهاردكروم مثل:الجلب -الصباب -الفتيل في مصانع البلاستيك. <br>
        5- تصنيع جميع سلندرات الطباعة او اطقم المقصات الخاصة بمصانع البلاستيك. <br>
        </p>
        `
      },
      {
        id:5,
        image:"https://www.kraiburg-walzen.de/content/images/produkte/Silikonwalze.jpg",
        title:"سلندرات السيليكون",
        Des:`<p>
        تتميز هذة الخامة بتحمل درجات الحرارة العالية تصل الي 350 درجة و تتحمل تركيز احماص تصل الي 90% و تتعرض للاشعة فوق البنفسجية. <br>
        - تستخدم في tradement   <br> 
        - سلندرات المعالجة المستخدمة في مصانع البلاستيك<br>
        - سلندرات المعالجة المستخدمة في مصانع النسيج<br>
        - سلندرات السولفان الحراري<br>
        - قطع غيار المصانع<br>
          
        `
      },
      {
        id:6,
        image:"https://www.danskgummi.com/wp-content/uploads/2020/08/PU-polyurethane-rollers-640x640.jpg",
        title:"البولي يوريثان",
        Des: `<p>
        تتميز هذه الخامة بقوة فائقة لتحمل الضغوط و الاحتكاك و تستخدم في
        كسوة السلندرات و الدرافيل و البكرات و العجل 
         في مجالات : <br>
        * المطابع <br>
        * مصانع تشكيل المعادن <br>
        * مصانع الاخشاب <br>
        * دباغة الجلود<br>
        * جلفنة المعادن<br>
        * الصباغة و التجهيز <br>
        * مصانع البلاستيك<br>
        </p>
        `
      },
]

    constructor() { }

    getproductData(){
        return this.ArProducts;
    }

}