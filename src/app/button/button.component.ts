import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">count Click</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit, OnDestroy {

  @Output() valueChanged = new EventEmitter();
  @Input() data: string;
  private numberOfClick = 0;
  constructor() {
    console.log('ButtonComponent');

  }


  handleClick() {
    this.numberOfClick++;
    this.valueChanged.emit(this.numberOfClick);

  }

  ngOnInit() {
    console.log('ButtonComponent ngOnInit');
  }

  // ngOnChanges() {
  //   console.log(' ButtonComponent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log(' ButtonComponent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log(' ButtonComponent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log(' ButtonComponent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log(' ButtonComponent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log(' ButtonComponent ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log(' ButtonComponent ngOnDestory');
  }

}
