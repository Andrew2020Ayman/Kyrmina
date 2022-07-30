import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ChangeLangService {

    local_lenguage = 'ar';
    changeNewArrival = new BehaviorSubject(null);
    change_lang = new BehaviorSubject('ar');

    constructor( private translate: TranslateService) { }

}
