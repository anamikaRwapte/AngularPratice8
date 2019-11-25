import { Directive, HostBinding, HostListener, ElementRef,Input } from '@angular/core';
import { CommonService } from './common.service';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  constructor(private commonService:CommonService,private el: ElementRef) {
    console.log('DateFormatDirective');
    // @Input('myHighlight') highlightColor: string;
    el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter')  onclick(){
    this.el.nativeElement.style.backgroundColor = 'blue';
   }
   
   @HostListener('mouseleave')  mouseover(){
    this.el.nativeElement.style.backgroundColor = 'red';}
   


}
