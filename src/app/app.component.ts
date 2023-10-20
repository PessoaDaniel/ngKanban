import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged:any = false;

  constructor (private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.showLoginSubject.subscribe((isLoggedInResult) => {
      this.isLogged = isLoggedInResult;
    });

    this.authService.isLoggedIn();
  }
  
  title = 'ng-kanban';
}
