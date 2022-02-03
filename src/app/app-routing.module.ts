import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AffiliateWebsiteModule} from './affiliate-website/affiliate-website.module';

 const routes: Routes = [
// {path: "admin", loadChildren:()=> import('./affiliate-website/affiliate-website.module').
// then(mod=>mod.AffiliateWebsiteModule)

// }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AffiliateWebsiteModule

  ],
  exports: [RouterModule,AffiliateWebsiteModule]
})
export class AppRoutingModule { }
