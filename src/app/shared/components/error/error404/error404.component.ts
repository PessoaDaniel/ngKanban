import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {
  
  constructor (private authService: AuthService) {}

  ngOnInit() {
    this.authService.showLoginSubject.next(false);
  }
}
