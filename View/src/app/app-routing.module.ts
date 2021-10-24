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
import { AddProductComponent } from './components/add-product/add-product.component';
import { StackProductComponent } from './components/stack-product/stack-product.component';
import { PageAffiliateUserComponent } from './components/page-affiliate-user/page-affiliate-user.component';
import { PageAffiliatesComponent } from './components/page-affiliates/page-affiliates.component';
import { GlobalUserComponent } from './components/global-user/global-user.component';
import { ProfUsersComponent } from './components/prof-users/prof-users.component';
import { FollowedUsersComponent } from './components/followed-users/followed-users.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:SignInComponent},
  {path:'register', component:SignUpComponent},
  {path:'home-user',component:HomePageComponent},
  {path:'home-user/user/profile',component:ProfileUserComponent},
  {path:'home-user/user/profile/edit-profile',component:EditProfileComponent},
  {path:'home-user/user/profile/verify-account',component:UserVerifyComponent},

  {path:'home-user/my-posts/post-article',component:AddProductComponent},
  {path:'home-user/my-posts/my-articles-posted',component:StackProductComponent},
  {path:'home-user/users/affiliate-user',component:PageAffiliateUserComponent},
  {path:'home-user/users/affiliates',component:PageAffiliatesComponent},
  {path:'home-user/users/global-users',component:GlobalUserComponent},
  {path:'home-user/users/prof-users',component:ProfUsersComponent},
  {path:'home-user/users/followed-users',component:FollowedUsersComponent},
  {path:'home-user/users/profile/:id_cuenta',component:ProfUsersComponent},
  {path:'home-user/users/profile2/:user',component:ProfUsersComponent},
  // {path:'home-user/my-posts/post-article',component:UserVerifyComponent},
  // {path:'home-user/my-posts/post-article',component:UserVerifyComponent},
  
  // {path:'verify-account/:id',component:UserVerifyComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
