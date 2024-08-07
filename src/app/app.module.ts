import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "../environments/environment";
import { GroupsListPageComponent } from './groups-list-page/groups-list-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { CreateGroupPageComponent } from './create-group-page/create-group-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MyGroupsListComponent } from './my-groups-list/my-groups-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    GroupsListPageComponent,
    SignInComponent,
    CreateGroupPageComponent,
    GroupPageComponent,
    GroupsListComponent,
    MessagesListComponent,
    MyGroupsListComponent,
    NavBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





