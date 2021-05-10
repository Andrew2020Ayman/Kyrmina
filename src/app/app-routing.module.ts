import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { ProductItemComponent } from './view/productMod/product-item/product-item.component';
import { ProductsComponent } from './view/productMod/products/products.component';


const routes :Routes =[
      {path: '',redirectTo: `Home`, pathMatch: 'full' },
      {path:'Home',component:HomeComponent},
      {path:'About',component:AboutComponent},
      {path:'Product',component:ProductsComponent},
      {path:'Productitem/:id',component:ProductItemComponent},
      {path:'Contact',component:ContactComponent}
    

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
