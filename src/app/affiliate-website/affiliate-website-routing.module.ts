import { Component, NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';

import { PetSuppliesComponent } from '../affiliate-website/pet-supplies/pet-supplies.component';
import {GiftcardsComponent} from '../affiliate-website/giftcards/giftcards.component';
import {GiftIdeasComponent} from '../affiliate-website/gift-ideas/gift-ideas.component';
import {SportsFitnessOutdoorComponent } from '../affiliate-website/sports-fitness-outdoor/sports-fitness-outdoor.component';
import { BabyComponent } from '../affiliate-website/baby/baby.component';
import {CarouselImageComponent } from '../affiliate-website/carousel-image/carousel-image.component';
const routes: Routes = [
// {path: 'petSuppliers', component: PetSuppliesComponent},
// //  {path: 'petSuppliers/avail', component: AllAvailableComponent},
// // {path: 'petSuppliers/comming', component: UpcommingComponent},
// // {path: 'affiliate', component: AffiliateWebsiteComponent},
// // {path: '', redirectTo: '/petSuppliers', pathMatch: 'full'}
{path: 'petSuppliers', component: PetSuppliesComponent},
{path: 'giftcard', component: GiftcardsComponent},
{path: 'giftidea', component: GiftIdeasComponent},
{path: 'sportfitness', component: SportsFitnessOutdoorComponent},
{path: 'baby', component: BabyComponent },
{path: 'carouselcard', component: CarouselImageComponent},
{ path: '',   redirectTo: 'carouselcard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatewebsiteRoutingModule { }
export const routingComponents= [ PetSuppliesComponent ]
