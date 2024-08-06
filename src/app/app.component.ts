import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'members-only-no-standalone';
  errorMessage: string = '';

  constructor(private auth: AngularFireAuth) { }


  onClickSignOut() {
    this.errorMessage = "";
    this.auth.signOut()
      .catch(e => { this.errorMessage = e.message; });
  }
}
