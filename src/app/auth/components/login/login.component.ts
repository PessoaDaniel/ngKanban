import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastAlerltService } from 'src/app/shared/services/alerts/toast-alerlt.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: ToastAlerltService,
    private authService: AuthService
    ) {
    this.loginForm = formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    if(!this.loginForm.valid) {
        this.alertService.error('Login e/ou senha inválidos');
    } else {
      this.authService.login(this.loginForm.value);
    }
  }


}
