import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ButtonComponent } from './button/button.component';
import { DateFormatDirective } from './date-format.directive';
import { CommonService } from './common.service';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,    
    HighlightDirective,
    DateFormatDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CommonService],
  entryComponents:[ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private injector:Injector){
    console.log('AppModule');
    

  }

  ngDoBootstrap(){
    const createElement =  createCustomElement(ButtonComponent,{injector:this.injector});
    customElements.define('app-button',createElement);
  }


}
