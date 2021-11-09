import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetSuppliesComponent } from './affiliate-website/pet-supplies/pet-supplies.component';
import {GiftcardsComponent} from './affiliate-website/giftcards/giftcards.component';
import {GiftIdeasComponent} from './affiliate-website/gift-ideas/gift-ideas.component';
import {SportsFitnessOutdoorComponent } from './affiliate-website/sports-fitness-outdoor/sports-fitness-outdoor.component'
// import {AffiliateWebsiteModule} from './affiliate-website/affiliate-website.module'
 const routes: Routes = [
  {path: 'petSuppliers', component: PetSuppliesComponent},
  {path: 'giftcard', component: GiftcardsComponent},
  {path: 'giftidea', component: GiftIdeasComponent},
  {path: 'sportfitness', component: SportsFitnessOutdoorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
