import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  backgroundPath:string = '';

  constructor() {
    this.backgroundPath = './assets/img/20945628.jpg'
  }

}
