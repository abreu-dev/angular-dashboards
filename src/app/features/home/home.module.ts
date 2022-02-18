import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(new HomeRoutes().get()),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
