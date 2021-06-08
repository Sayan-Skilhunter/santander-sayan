import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PropertyDetailsComponent,
    ReviewSubmitComponent,
    SidenavComponent,
    PropertyFormComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
