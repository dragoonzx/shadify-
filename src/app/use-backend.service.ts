import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseBackendService {

  constructor() { }

  getScreenshot() {
    console.log('backend is working!!!')
  }
}
