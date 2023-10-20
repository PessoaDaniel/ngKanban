import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged = false;

  constructor (private authService: AuthService) {

  }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
        this.isLogged = true
    }
  }
  
  title = 'ng-kanban';
}
