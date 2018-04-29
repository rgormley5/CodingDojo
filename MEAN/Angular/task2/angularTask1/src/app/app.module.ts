import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NiceService } from './nice.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [NiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
