import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeModule } from './features/home/home.module';
import { MasterLayoutComponent } from './shared/layout/master-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule, 
    appRouting,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
