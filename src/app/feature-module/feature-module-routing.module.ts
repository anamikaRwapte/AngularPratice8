import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';


const routes: Routes = [{
  path:'',
  component:FeatureHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
