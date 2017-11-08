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
@NgModule({
  declarations: [
    AppComponent,
      UsersComponent,
      UserComponent,
      UserDetailComponent,
      NavComponent,
      ModalBasicComponent
  ],
  imports: [
    BrowserModule, FormsModule,
      AngularFontAwesomeModule,
      NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
