import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HashLocationStrategy,Location,LocationStrategy } from '@angular/common';



import { MainHomeComponent } from './main-home/main-home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { AviationComponent } from './aviation/aviation.component';
import { NoticeComponent } from './notice/notice.component';
import { HowApplyComponent } from './how-apply/how-apply.component';
import { PrivacyRefundComponent } from './privacy-refund/privacy-refund.component';
import { MainwebComponent } from './mainweb/mainweb.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    MainFooterComponent,
    AboutusComponent,
    ContactusComponent,
    ServiceComponent,
    AviationComponent,
    NoticeComponent,
    HowApplyComponent,
    PrivacyRefundComponent,
    MainwebComponent,
    PageSectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
