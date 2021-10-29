import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetSuppliesComponent } from './affiliate-website/pet-supplies/pet-supplies.component';
import {GiftcardsComponent} from './affiliate-website/giftcards/giftcards.component'
// import {AffiliateWebsiteModule} from './affiliate-website/affiliate-website.module'
 const routes: Routes = [
  {path: 'petSuppliers', component: PetSuppliesComponent},
  {path: 'giftcard', component: GiftcardsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
