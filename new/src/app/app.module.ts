import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QiMainComponent } from './qi-main/qi-main.component';
import { BaseComponent } from './base/base.component';
import { KyungBaeSearchComponent } from './kyung-bae-search/kyung-bae-search.component';

@NgModule({
  declarations: [
    AppComponent,
    QiMainComponent,
    BaseComponent,
    KyungBaeSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
