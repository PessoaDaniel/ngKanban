import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showLoginSubject.next(true);
  }
}
