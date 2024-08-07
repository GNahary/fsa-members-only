import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  errorMessage: string = '';

  constructor(private auth: AngularFireAuth) { }

  onClickSignOut() {
    this.errorMessage = "";
    this.auth.signOut()
      .catch(e => { this.errorMessage = e.message; });
  }

}



