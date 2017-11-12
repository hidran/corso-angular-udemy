import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './services/user.service';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {RouterModule, Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule} from '@angular/common/http';

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
  declarations: [
    AppComponent,
      UsersComponent,
      UserComponent,
      UserDetailComponent,
      NavComponent,
      ModalBasicComponent,
      UserDataComponent
  ],
  imports: [
    BrowserModule, FormsModule,
      AngularFontAwesomeModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(routes),
      HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
