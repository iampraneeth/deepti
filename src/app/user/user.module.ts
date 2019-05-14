import { NgModule } from '@angular/core';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFavouritesListComponent } from './user-favourites-list/user-favourites-list.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserForgetPasswordComponent } from './user-forget-password/user-forget-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user.service';


@NgModule({
    declarations:[
        UserSignupComponent,
        UserLoginComponent,
        UserFavouritesListComponent,
        UserDetailsComponent,
        UserForgetPasswordComponent
       
        
    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(userRoutes)
    ],
    exports:[
        UserSignupComponent,
        UserLoginComponent,
        UserFavouritesListComponent,
        UserDetailsComponent,
        UserForgetPasswordComponent
    ],
    providers:[
        UserService
    ]
})
export class UserModule{}