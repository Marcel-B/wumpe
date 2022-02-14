import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { NeuComponent } from './neu/neu.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

@NgModule({
  declarations: [
    AppComponent,
    UebersichtComponent,
    NeuComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbDropdownModule
    ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
