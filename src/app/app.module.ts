import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {routes} from "./app.routes";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsComponent } from './forms/forms.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { HomeComponent } from './home/home.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FormsComponent,
    NabvarComponent,
    HomeComponent,
    FormsReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
