import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PropertyDetailsComponent },
  { path: 'review', component: ReviewSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
