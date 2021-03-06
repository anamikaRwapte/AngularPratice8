import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'AngularPratice8';
  name: string;

  numberOfClick = 0;

  valueChanged($event: number) {
    this.numberOfClick = $event;
  }

  constructor() {
  console.log('AppComponent');
  console.log(environment);
  }

  ngOnInit() {
    console.log(' AppComponent ngOnInit');
  }
  // ngOnChanges() {
  //   console.log(' AppComponent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log(' AppComponent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log(' AppComponent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log(' AppComponent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log(' AppComponent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log(' AppComponent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log(' AppComponent ngOnDestory');
  // }

}
