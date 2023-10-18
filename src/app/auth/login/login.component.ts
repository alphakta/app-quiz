import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((user: any) => {
      if (user.length === 0) alert('Erreur dans le pseudo ou le mot de passe');
      this.authService.user = user[0];
      if (!this.authService.user) return;
      this.authService.saveUser();
      this.router.navigate(['/welcome']);
    }, (error) => {
      console.log(error);
    });
  }
}
