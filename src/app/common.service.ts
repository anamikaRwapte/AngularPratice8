import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    console.log('CommonService');
  }

  buttonClick(arg0: boolean) {
     alert('button clicked' + arg0);
  }
}
