import { NgModule } from '@angular/core';
import { HomeService , AboutService , ProductService,SharedLangService,ChangeLangService} from './sharedServices';
@NgModule({
  imports: [],
  providers: [
    HomeService,
    AboutService,
    ProductService,
    SharedLangService,
    ChangeLangService
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
