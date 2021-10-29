import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AffiliateWebsiteComponent} from './affiliate-website.component'
import {HeaderComponent} from './header/header.component'
import { MenubarModule } from 'primeng/menubar';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
// import { CardItemComponent } from './card-item/card-item.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './carousel-image/productservice';
import { FooterComponent } from './footer/footer.component';

import { SlideMenuModule } from 'primeng/slidemenu';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoCardService } from './video-card/productservice';
import { PetSuppliesComponent } from './pet-supplies/pet-supplies.component';
import {AffiliatewebsiteRoutingModule} from "./affiliate-website-routing.module";

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { AllAvailableComponent } from './pet-supplies/all-available/all-available.component';
import { UpcommingComponent } from './pet-supplies/upcomming/upcomming.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
  @NgModule({
  declarations: [
    AffiliateWebsiteComponent,
    HeaderComponent,
    CarouselImageComponent,

    FooterComponent,
    VideoCardComponent,
    PetSuppliesComponent,
    AllAvailableComponent,
    UpcommingComponent,
    GiftcardsComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule,
    MenubarModule,
    ButtonModule,
    ToastModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    AffiliatewebsiteRoutingModule,
    MessageModule,
    TabMenuModule,
  ],
  exports: [
    AffiliateWebsiteComponent,
    HeaderComponent,
    CarouselImageComponent,

    FooterComponent,
    AllAvailableComponent,

  ],
  providers: [ProductService,VideoCardService]
})
export class AffiliateWebsiteModule { }
