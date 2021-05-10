import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/sharedServices';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  fetchData=false;
  Arabicproduct=[];
  productData;
  constructor(private prodServ:ProductService,private route: ActivatedRoute) {
   
   }

  ngOnInit(): void {
  let productIndex = this.route.snapshot.params.id;
  this.getProductData(()=>{
    this.fetchData = true;
    console.log("done");
    this.productData = this.Arabicproduct[productIndex];
    console.log(this.productData);
    
  })
  }

  getProductData(callback){
    this.Arabicproduct = this.prodServ.getproductData();
    callback();
  }
}
