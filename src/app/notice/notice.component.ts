import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

constructor(private _http:HttpClient){}
private inerviewAPI = "https://indiba-5c73d-default-rtdb.firebaseio.com/interview.json";

ngOnInit(){
  this.getdata();
}


  database:any = [
    { 
      name : "data name",
      F_name : "J",
      Job_Profile : "pata n",
      area_pin : "999900",
      contact : "09999989",
      dob : "2023-08-10",
      email : "test@gmail.com",
      J_loction : "AGRA",
      status: "Select",
    }
  ]
  getdata(){
    this._http.get<any>(this.inerviewAPI).subscribe(res=>{
      console.log(res);
      this.database = res;
    })
  }

}
