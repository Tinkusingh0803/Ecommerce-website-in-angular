import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AffiliateWebsiteComponent} from './affiliate-website.component'
import {HeaderComponent} from './header/header.component'
import { MenubarModule } from 'primeng/menubar';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { CardsImageComponent } from './cards-image/cards-image.component';
import { CardItemComponent } from './card-item/card-item.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './card-item/productservice';
import { FooterComponent } from './footer/footer.component';

import { SlideMenuModule } from 'primeng/slidemenu';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoCardService } from './video-card/productservice';


  @NgModule({
  declarations: [
    AffiliateWebsiteComponent,
    HeaderComponent,
    CarouselImageComponent,
    CardsImageComponent,
    CardItemComponent,
    FooterComponent,
    VideoCardComponent,

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
    SlideMenuModule
  ],
  exports: [
    AffiliateWebsiteComponent,
    HeaderComponent,
    CarouselImageComponent,
    CardItemComponent,
    FooterComponent
  ],
  providers: [ProductService,VideoCardService]
})
export class AffiliateWebsiteModule { }
