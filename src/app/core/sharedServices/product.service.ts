import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

ArProducts=[
    {
        id:1,
        ArId:'۱',
        image:"../../../assets/products/kyrminaRoller.jpeg",
        title:" السلندرات و الدرافيل",
        titleEn:"Cylinders and rollers",
        EnDes:`<p>We process cylinder cladding and rubber rollers with all kinds of raw materials, whether natural or industrial rubber or ebonite (EPDM) with the highest accuracy and the highest level of finishing.
        For all types of factories and all sizes up to 7 meters and diameters up to 1 m.
        Used in the fields: <br>
        1. Offset printing (web-sheet) for printing newspapers, magazines and commercial publications <br>
        2. Tinplate printing <br>
        3. Cardboard Printing (Roller Print-Federroll) <br>
        4. Dyeing and Finishing<br>
        5. Tanning and leather <br>
        6. Plastic printing factories (flexo-film-pulling-scissors)<br>
        7. Wood factories (rollers, grays, sandpaper.....) <br>
        8. Foam and foil factories (rolling and forming)<br>
        9. Medical tube printing factories <br>
        10. Tissue Paper Factories<br>
        11. Paper manufacturing plants<br>
        </p>`,
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
        ArId:'۲',
        image:"../../../assets/products/Compression.jpg",
        title:"المكبوسات والمسحوبات",
        titleEn:"Compressions & towing",
        EnDes:`<h2> <p> Compress</h2>
        Casting all kinds of compresses from all kinds of raw materials, whether natural, synthetic, silicone or EPDM.
        We have all the shapes and sizes required by the needs of factories, whether (pulleys - special formations - wheels - gaskets - vacuum rubber - rubber bases - ..... any shape wherever). <br><br>

        <h2>Withdrawals</h2>
        Withdrawing all types of profiles, whether rubber or plastic, from all materials such as (natural_industrial-EPDM-PVC).
        </p>`,
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
        ArId:'۳',
        image:"../../../assets/products/copyimg3.jpg",
        title:"التبطين بالكاوتشوك",
        titleEn:"Rubber lining",
        EnDes:`<p>
        We do the lining process for all tanks, basins and pipes of phosphate factories production lines and all chemicals with rubber and ebonite raw materials with the latest technologies, whether cold or steam, whether in our factories or inside the factories themselves
        </p>`,
        Des:`<p>
        نقوم بعملية التبطين لجميع التنكات و الاحواض و مواسير خطوط انتاج مصانع الفوسفات و جميع الكيماويات بخامات الكاوتشوك و الابونيت بأحدث تقنيات سواء علي البارد او بالبخار سواء في مصانعنا او داخل المصانع نفسها
        </p>
        `
      },
      {
        id:4,
        ArId:'٤',
        image:"https://gtk.ch/wp-content/uploads/2021/03/RMP_1-1630x860.jpg",
        title:" الدرافيل المعدنية",
        titleEn:"Metal rollers",
        EnDes:`<p>
        We manufacture rolls or metal cylinders used in all factories, and we also paint them with hard chrome, nickel chrome or the galvanizing process. <br>
        She is distinguished in the manufacture of rollers: <br><br>
        1- Analox used in flexo printing, whether 80 or 100 nets. <br>
        2- Starch rolls used in carton factories. <br>
        3- Hardchrome rolls used in plastic factories. <br>
        4- Re-painting factory spare parts with hard chrome, such as: fetching - caulk - wick in plastic factories. <br>
        5- Manufacture of all printing cylinders or sets of scissors for plastic factories. <br>
        </p>`,
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
        ArId:'۵',
        image:"../../../assets/products/EGB-DAL-01.jpg",
        title:"سلندرات السيليكون",
        titleEn:"Silicon rollers",
        EnDes:`<p>
        This material is characterized by withstanding high temperatures up to 350 degrees, acid concentrations of up to 90%, and exposure to ultraviolet rays. <br>
        - Used in trade <br>
        - Processing cylinders used in plastic factories<br>
        - Processing cylinders used in textile factories<br>
        - Thermal cellophane cylinders<br>
        Factory spare parts<br>`,
        Des:`<p>
        تتميز هذة الخامة بتحمل درجات الحرارة العالية تصل الي 350 درجة و تتحمل تركيز احماض تصل الي 90% و تتعرض للاشعة فوق البنفسجية. <br>
        - تستخدم في tradement   <br>
        - سلندرات المعالجة المستخدمة في مصانع البلاستيك<br>
        - سلندرات المعالجة المستخدمة في مصانع النسيج<br>
        - سلندرات السولفان الحراري<br>
        - قطع غيار المصانع<br>

        `
      },
      {
        id:6,
        ArId:'٦',
        image:"../../../assets/products/polyKyrmina.jpeg",
        title:"البولي يوريثان",
        titleEn:"polyurethane rollers",
        EnDes:`<p>
        This material is characterized by superior strength to withstand pressures and friction and is used in
        Cylinder cover, rollers, pulleys and wheels
         In the areas of: <br>
        * Presses <br>
        * Metal Forming Factories <br>
        * Wood Factories <br>
        * Leather tanning<br>
        * Metal galvanizing<br>
        * Dyeing and Finishing <br>
        * Plastic factories<br>
        </p>`,
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
