import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', 
      [
        Validators.required, 
        Validators.minLength(4),
        // this.checkPass
      ]),
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: [this.checkPasswords, this.checkPasswordUsername] });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.authService.addUser({
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    });
    this.router.navigate(['/login']);
  }

  private checkPasswords(control: FormGroup) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password?.value !== confirmPassword?.value ? { missMatch: true } : null;
  }

  private checkPasswordUsername(control: FormGroup) {
    const username = control.get('username');
    const password = control.get('password');

    if (password?.value.includes(username?.value)) {
      password.setErrors({ containsUsername: true });
      return { containsUsername: true };
    }
    return null;
  }

  checkPass() {}

  get getErrorLabel() {
    if (this.registerForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.registerForm.controls?.['password']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.registerForm.controls?.['password']?.errors?.['minlength']?.requiredLength}`;
    if (this.registerForm.errors?.['missMatch']) return 'Les mots de passe ne correspondent pas';
    return 'Un problème est survenu';
  }
}
