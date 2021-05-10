import { NgModule } from '@angular/core';
import { HomeService , AboutService , ProductService,SharedLangService} from './sharedServices';
@NgModule({
  imports: [],
  providers: [
    HomeService,
    AboutService,
    ProductService,
    SharedLangService
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
