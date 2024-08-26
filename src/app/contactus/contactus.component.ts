import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { contact } from '../interface.module';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {


  private url = "https://indiba-5c73d-default-rtdb.firebaseio.com/testing.json";
  datapoint:any;
  arrayTest:any = [];
  thanksAlert:any=false;
  constructor(private _http:HttpClient){ }

display(){
  console.log("hello")
  const data = document.getElementById('remove')?.setAttribute('style','display:none')
  return data;
}

  contactForm(data: contact){
      this.arrayTest.push(data);
      this._http.post<any>(this.url,data).subscribe(res=>
        {
          console.log(res);
          this.thanksAlert = true;
        }
      );
  }
}
 