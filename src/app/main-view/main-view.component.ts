import { Component, OnInit } from '@angular/core';
import { urlPattern } from '../../utils/validateUrl'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  urlPattern: RegExp = urlPattern

  constructor() { }

  ngOnInit(): void {
  }

}
