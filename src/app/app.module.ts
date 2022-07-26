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
import { ProductsComponent } from './view/productMod/products/products.component';
import { AboutComponent } from './view/about/about.component';
import { LoadingscreenComponent } from './layout/loadingscreen/loadingscreen.component';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { ContactComponent } from './view/contact/contact.component';
import { ProductItemComponent } from './view/productMod/product-item/product-item.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    AboutComponent,
    LoadingscreenComponent,
    ContactComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    OwlModule,
    RoundProgressModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports:[ToastrModule],
  providers: [CarouselModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
