import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { GroupsListPageComponent } from "./groups-list-page/groups-list-page.component";
import { routeGuard } from './route.guard';
import { GroupPageComponent } from './group-page/group-page.component';
import { CreateGroupPageComponent } from './create-group-page/create-group-page.component';

const routes: Routes = [
  { path: '', component: GroupsListPageComponent, canActivate: [routeGuard] },
  { path: "sign-in", component: SignInComponent },
  { path: 'groups/:id', component: GroupPageComponent, canActivate: [routeGuard] },
  { path: 'create-group', component: CreateGroupPageComponent, canActivate: [routeGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


