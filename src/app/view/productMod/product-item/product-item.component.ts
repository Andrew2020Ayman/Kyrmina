import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeLangService, ProductService } from 'src/app/core/sharedServices';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  fetchData=false;
  Arabicproduct=[];
  productData;
  constructor(private prodServ:ProductService,
              private route: ActivatedRoute,
              private changelngServ:ChangeLangService) {

   }

  ngOnInit(): void {
  let productIndex = this.route.snapshot.params.id;
  this.getProductData(()=>{
    this.fetchData = true;
    this.productData = this.Arabicproduct[productIndex];

  })
  }

  getProductData(callback){
    this.Arabicproduct = this.prodServ.getproductData();
    callback();
  }
}
