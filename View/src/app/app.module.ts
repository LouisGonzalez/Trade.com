import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service'
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { StackProductComponent } from './components/stack-product/stack-product.component';
import { ChatGlobalComponent } from './components/chat-global/chat-global.component';
import { UserVerifyComponent } from './components/user-verify/user-verify.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalVerifyComponent } from './components/modal-verify/modal-verify.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    EditUserComponent,
    ProfileUserComponent,
    AddProductComponent,
    EditProductComponent,
    StackProductComponent,
    ChatGlobalComponent,
    UserVerifyComponent,
    EditProfileComponent,
    NavUserComponent,
    ModalVerifyComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
