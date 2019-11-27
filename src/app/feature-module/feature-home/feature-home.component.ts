import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.scss']
})
export class FeatureHomeComponent implements OnInit {

  constructor() {
    console.log('FeatureHomeComponent');
  }

  ngOnInit() {
    console.log('FeatureHomeComponent ngOnInit');
  }

  ngOnChanges() {
    console.log(' FeatureHomeComponent ngOnChanges');
  }
  ngDoCheck() {
    console.log(' FeatureHomeComponent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log(' FeatureHomeComponent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log(' FeatureHomeComponent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log(' FeatureHomeComponent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log(' FeatureHomeComponent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log(' FeatureHomeComponent ngOnDestory');
  }

}
