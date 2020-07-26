import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TextInputComponent } from './text-input/text-input.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TextInputComponent,
    BrowserWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
