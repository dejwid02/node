import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StationslistComponent } from './stationslist/stationslist.component';

@NgModule({
  declarations: [
    StationslistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StationslistComponent]
})
export class AppModule { }
