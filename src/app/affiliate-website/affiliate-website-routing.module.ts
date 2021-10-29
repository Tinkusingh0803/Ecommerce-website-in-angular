import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import {PetSuppliesComponent} from "./pet-supplies/pet-supplies.component";
import {AllAvailableComponent} from "./pet-supplies/all-available/all-available.component";
import{UpcommingComponent} from "./pet-supplies/upcomming/upcomming.component"
import {AffiliateWebsiteComponent} from "./affiliate-website.component";

const routes: Routes = [
{path: 'petSuppliers', component: PetSuppliesComponent},
//  {path: 'petSuppliers/avail', component: AllAvailableComponent},
// {path: 'petSuppliers/comming', component: UpcommingComponent},
// {path: 'affiliate', component: AffiliateWebsiteComponent},
// {path: '', redirectTo: '/petSuppliers', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatewebsiteRoutingModule { }
export const routingComponents= [ PetSuppliesComponent ]
