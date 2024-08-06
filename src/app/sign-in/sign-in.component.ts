import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  errorMessage: string = "";
  emailValue: string = "";
  passwordValue: string = "";

  constructor(private router: Router
    , private auth: AngularFireAuth,
  ) { }

  onClickSignIn() {
    this.errorMessage = "";
    this.auth.signInWithEmailAndPassword(this.emailValue.trim(), this.passwordValue.trim())
      .then(() => this.router.navigateByUrl('/'))
      .catch(e => { this.errorMessage = e.message; });
  }

}
