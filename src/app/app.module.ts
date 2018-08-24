import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
