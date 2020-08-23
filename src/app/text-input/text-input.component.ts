import { Component, OnInit, Input } from '@angular/core';
import { isValidURL } from '../../utils/validateUrl'
import { UseBackendService } from '../use-backend.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  textUrl = '';
  @Input() pattern:string;

  constructor(private useBackend: UseBackendService, private router: Router) { }

  ngOnInit(): void {
  }

  

  submitUrl():void {
    // check is input valid
    isValidURL(this.textUrl) && this.getScreenAndNavigate()
  }

  getScreenAndNavigate():void {
    this.useBackend.getScreenshot()
    this.router.navigateByUrl('/editor')
  }

}
