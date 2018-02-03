import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UsersComponent} from "./users/users.component";
import {UserDataComponent} from "./user-data/user-data.component";

const  routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users/new',
        component: UserDetailComponent
    },
    {
        path: 'users/:id/edit',
        component: UserDetailComponent
    },
    {
        path: 'users/:id',
        component: UserDataComponent
    }
];
@NgModule({
  imports: [
    CommonModule, 
      RouterModule.forRoot(routes),

  ],
    exports :[
        RouterModule 
    ],
  declarations: []
})
export class RoutingModuleModule { }
