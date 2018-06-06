import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QiMainComponent } from './qi-main/qi-main.component';
import { BaseComponent } from './base/base.component';
import { KyungBaeSearchComponent } from './kyung-bae-search/kyung-bae-search.component';

import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './demo-utils/module'

@NgModule({
  declarations: [
    AppComponent,
    QiMainComponent,
    BaseComponent,
    KyungBaeSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    FormsModule,
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
