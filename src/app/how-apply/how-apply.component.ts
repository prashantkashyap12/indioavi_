import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-apply',
  templateUrl: './how-apply.component.html',
  styleUrls: ['./how-apply.component.css']
})
export class HowApplyComponent {

  private applyurl = "https://indiba-5c73d-default-rtdb.firebaseio.com/testingAdmin.json";
  applyDB:any = [];
  datamain:any;
  checkvalue:any = "false"
  btnActive:any;
  ThanksAlert:any=false;
  constructor(private _http:HttpClient, private _router:Router){}
 
  checkBox(){
    this.checkvalue = !this.checkvalue;
    this.btnActive = !this.checkvalue;
    console.log(this.btnActive);
  }


  PopHide(){
    console.log('pop Hide')
    let pop = document.getElementById('idPop')?.setAttribute('style','display:none');
    return pop;
  }

  
  ApplyForm(data:NgForm){
    // debugger;  
    this.ThanksAlert = true;
    this.applyDB.push(data.value);
    this._http.post(this.applyurl,data.value).subscribe(res=>{
     console.log(res);
    this.ThanksAlert = true;
    })
  }
}
