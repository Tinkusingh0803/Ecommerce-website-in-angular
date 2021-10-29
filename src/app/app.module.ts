import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AffiliateWebsiteModule} from './affiliate-website/affiliate-website.module';
import { CommonModule } from '@angular/common';
// import {AffiliateWebsiteComponent} from './affiliate-website.component'
// import {HeaderComponent} from './header/header.component'
import { MenubarModule } from 'primeng/menubar';
// import { CarouselImageComponent } from './carousel-image/carousel-image.component';
// import { CardItemComponent } from './card-item/card-item.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './productservice';
// import { FooterComponent } from './footer/footer.component';

import { SlideMenuModule } from 'primeng/slidemenu';
// import { VideoCardComponent } from './video-card/video-card.component';
// import { VideoCardService } from './video-card/productservice';
// import { PetSuppliesComponent } from './pet-supplies/pet-supplies.component';
// import {AffiliatewebsiteRoutingModule} from "./affiliate-website-routing.module";

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import {ReactiveFormsModule} from '@angular/forms';
// import { AllAvailableComponent } from './pet-supplies/all-available/all-available.component';
// import { UpcommingComponent } from './pet-supplies/upcomming/upcomming.component';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AffiliateWebsiteModule,
    CommonModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    MessageModule,
    TabMenuModule,
    ReactiveFormsModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
