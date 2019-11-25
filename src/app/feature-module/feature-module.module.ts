import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureHomeComponent } from './feature-home/feature-home.component';


@NgModule({
  declarations: [FeatureHomeComponent],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ]
})
export class FeatureModuleModule { 

  constructor(){
    console.log('FeatureModuleModule');
  }
}
