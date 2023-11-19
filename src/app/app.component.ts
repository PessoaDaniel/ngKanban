import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';
import { GeneralService } from './shared/services/genaral/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged:any = false;
  hideNavigation =  false;
  fullWidith = '';

  constructor (
    private authService: AuthService,
    private generalService: GeneralService
    ) {

  }

  ngOnInit() {
    this.authService.showLoginSubject.subscribe((isLoggedInResult) => {
      this.isLogged = isLoggedInResult;
    });
    this.generalService.navbarControlBehavior.subscribe((hideNavigation: boolean) => {
      this.hideNavigation = hideNavigation;
      if (hideNavigation) {

        this.fullWidith = 'full-width'
      }
    });
    this.authService.isLoggedIn();
  }
  
  title = 'ng-kanban';
}
