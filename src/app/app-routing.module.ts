import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../app/aboutus/aboutus.component';
import { AviationComponent } from './aviation/aviation.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowApplyComponent } from './how-apply/how-apply.component'; 
import { NoticeComponent } from './notice/notice.component';
import { PrivacyRefundComponent } from './privacy-refund/privacy-refund.component';
import { ServiceComponent } from './service/service.component';
import { MainwebComponent } from './mainweb/mainweb.component'; 

const routes: Routes = [
  {path:'', component:MainwebComponent},
  {path:'home', component:MainwebComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'Aviation', component:AviationComponent},
  {path:'service', component:ServiceComponent},
  {path:'notice', component:NoticeComponent},
  {path:'contact', component:ContactusComponent},
  {path:'apply-now', component:HowApplyComponent},
  {path:'privacy', component:PrivacyRefundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
