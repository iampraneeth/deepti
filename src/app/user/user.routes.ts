import { Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFavouritesListComponent } from './user-favourites-list/user-favourites-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserForgetPasswordComponent } from './user-forget-password/user-forget-password.component';


export const userRoutes : Routes = [
    { path: "signup" , component:UserSignupComponent },
    { path: "signin" , component:UserLoginComponent },
    { path: "favourites" , component:UserFavouritesListComponent },
    { path: "userdetails", component:UserDetailsComponent},
    { path: "forget-password", component:UserForgetPasswordComponent},
]