import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StationslistComponent } from './stationslist/stationslist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StationslistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [StationslistComponent]
})
export class AppModule { }
