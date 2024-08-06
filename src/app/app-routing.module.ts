import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { GroupsListPageComponent } from "./groups-list-page/groups-list-page.component";
import { routeGuard } from './route.guard';

const routes: Routes = [
  { path: "", component: GroupsListPageComponent, canActivate: [routeGuard] },
  { path: "sign-in", component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}