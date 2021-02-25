import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 import { CarouselModule  } from "ngx-owl-carousel-o";
 import { OwlModule  } from "ngx-owl-carousel";
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductsComponent } from './view/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [CarouselModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
