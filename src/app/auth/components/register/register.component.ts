import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _location: Location) {
  }

  backPage () {
    this._location.back();
  }
}
