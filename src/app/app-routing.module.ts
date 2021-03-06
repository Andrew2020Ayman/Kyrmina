import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { HomeComponent } from './view/home/home.component';
import { ProductsComponent } from './view/products/products.component';

const routes: Routes = [
  {path: '',redirectTo: 'Home', pathMatch: 'full' },
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Product",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
