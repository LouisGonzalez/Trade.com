import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service'

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
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ArticleFoundComponent } from './components/product-search/article-found/article-found.component';
import { PageAffiliatesComponent } from './components/page-affiliates/page-affiliates.component';
import { PageAffiliateUserComponent } from './components/page-affiliate-user/page-affiliate-user.component';
import { GlobalUserComponent } from './components/global-user/global-user.component';
import { ProfUsersComponent } from './components/prof-users/prof-users.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardUserAffiliateComponent } from './components/card-user-affiliate/card-user-affiliate.component';
import { CardAffiliatesComponent } from './components/card-affiliates/card-affiliates.component';
import { CardUserFollowedComponent } from './components/card-user-followed/card-user-followed.component';
import { FollowedUsersComponent } from './components/followed-users/followed-users.component';
import { ProductShopComponent } from './components/product-shop/product-shop.component';
import { AffiliatesComponent } from './components/affiliates/affiliates.component';
import { SmsComponent } from './components/chat/sms/sms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Materials
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { AddContactComponent } from './components/dialogs/add-contact/add-contact.component';
import { SearchAllUsersComponent } from './components/search-all-users/search-all-users.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { StackServicesComponent } from './components/stack-services/stack-services.component';
import { ChargedComponent } from './components/dialogs/charged/charged.component';
import { MsjAcceptComponent } from './components/dialogs/msj-accept/msj-accept.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { ShopServicesComponent } from './components/shop-services/shop-services.component';
import { ServiceShopComponent } from './components/service-shop/service-shop.component';
import { CardCartProductComponent } from './components/shop-products/card-cart-product/card-cart-product.component';
import { VerifyConfirmComponent } from './components/user-verify/verify-confirm/verify-confirm.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { AddCardComponent } from './components/my-cards/add-card/add-card.component';
import { WalletComponent } from './components/my-cards/wallet/wallet.component';
import { TransfersComponent } from './components/my-cards/transfers/transfers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { ModalAddCreditComponent } from './components/dialogs/modal-add-credit/modal-add-credit.component';
import { BuyComponent } from './components/shop-products/buy/buy.component';

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
    NotificationsComponent,
    ChatComponent,
    ProductSearchComponent,
    ArticleFoundComponent,
    PageAffiliatesComponent,
    PageAffiliateUserComponent,
    GlobalUserComponent,
    ProfUsersComponent,
    CardUserComponent,
    CardUserAffiliateComponent,
    CardAffiliatesComponent,
    CardUserFollowedComponent,
    FollowedUsersComponent,
    ProductShopComponent,
    AffiliatesComponent,
    SmsComponent,
    SearchUserComponent,
    AffiliatesComponent,
    AddContactComponent,
    SearchAllUsersComponent,
    AddServiceComponent,
    StackServicesComponent,
    ChargedComponent,
    MsjAcceptComponent,
    ShopProductsComponent,
    ShopServicesComponent,
    ServiceShopComponent,
    CardCartProductComponent,
    VerifyConfirmComponent,
    MyContactsComponent,
    MyCardsComponent,
    AddCardComponent,
    WalletComponent,
    TransfersComponent,
    ModalAddCreditComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule, 
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    
    // Ng2SearchPipeModule
  ],
  // exports: [
  //   MatButtonModule,
  //   MatFormFieldModule
  // ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
