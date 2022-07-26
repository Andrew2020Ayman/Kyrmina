import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { ChangeLangService, HomeService } from 'src/app/core/sharedServices';

declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  title = 'My first AGM project';
  lat = 31.390396;
  lng = 30.156920;

  currentLang ;
  EmailForm: FormGroup;
  serviceID = 'default_service';
  templateID = 'template_wxfzprf';
  publicKey = 'pIZ0I9ba-VpinU8qV';

  ContactData={};
  fetchData = true;

  constructor(private fb : FormBuilder,
              private toastr: ToastrService,
              private homeServ:HomeService,
              private changelngServ:ChangeLangService) {
    let CurrentUrl = window.location.href;
    let ArFound = CurrentUrl.search("ar");
    let EnFound = CurrentUrl.search("en");
    if(ArFound >= 0){
      this.currentLang = 'ar';
    }else if(EnFound >= 0){
      this.currentLang = 'en';
    }
  }

  ngOnInit(): void {
    this.getData(()=>{
      this.fetchData = true;
    });
    this.createEmailForm();
  }

  getData(callback){

     this.ContactData = this.homeServ.getContactData();
     callback();
  }

  createEmailForm(){
    this.EmailForm = this.fb.group({
      from_name:['',Validators.required],
      form_email:['',Validators.required],
      message:['',Validators.required]
    });
  }

  scrollFunc(){
    var elem = document.getElementById("formSection");
    elem.scrollIntoView();
  }

  public sendEmail(e: Event) {
    if(this.EmailForm.valid){

      e.preventDefault();
    emailjs.sendForm(this.serviceID, this.templateID, e.target as HTMLFormElement, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        this.toastr.success('message sent successfully');
        console.log('SUCCESS!',result.text);
      }, (error) => {
        this.toastr.error('message failed to send');
        console.log(error.text);
      });

    }
  }


}


