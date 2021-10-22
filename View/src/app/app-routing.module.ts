import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserVerifyComponent } from './components/user-verify/user-verify.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:SignInComponent},
  {path:'register', component:SignUpComponent},
  {path:'home-user',component:HomePageComponent},
  {path:'home-user/user/profile',component:ProfileUserComponent},
  {path:'home-user/user/profile/edit-profile',component:EditProfileComponent},
  {path:'home-user/user/profile/verify-account',component:UserVerifyComponent}
  // {path:'verify-account/:id',component:UserVerifyComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
