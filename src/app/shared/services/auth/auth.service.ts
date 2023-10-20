import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showLoginSubject = new BehaviorSubject(false);
  constructor(
    private router: Router
  ) { }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
       this.showLoginSubject.next(true);
    }
  }

  login(formValue:any) {
    localStorage.setItem('token', 'xx');
    this.showLoginSubject.next(true);
    this.router.navigate(['/']);
  }


}
