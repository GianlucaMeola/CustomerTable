import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { customerListComponent } from './customers/customer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OrderModule} from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    customerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrderModule,
    NgxPaginationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
