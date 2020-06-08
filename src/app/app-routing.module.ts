import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserAccountComponent } from './auth/components/user-account/user-account.component';
import { FoundStaffComponent } from './pages/found-staff/found-staff.component';
import { LostStaffComponent } from './pages/lost-staff/lost-staff.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'user-account', component: UserAccountComponent},
    { path: 'found-staff', component: FoundStaffComponent},
    { path: 'lost-staff', component: LostStaffComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }




