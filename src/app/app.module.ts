import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AffiliateWebsiteModule} from './affiliate-website/affiliate-website.module'

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AffiliateWebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
