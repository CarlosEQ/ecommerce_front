import { Routes, RouterModule } from "@angular/router";
import {LoginGuard} from './login.guard';
import {NoLoginGuard} from './no-login.guard';
import { SportsComponent } from './categories/sports/sports.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { ToysComponent } from './categories/toys/toys.component';



const ROUTES: Routes = [

    // { path: '', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'sports', component: SportsComponent, canActivate: [NoLoginGuard]},
    { path: 'vehicles', component: VehiclesComponent, canActivate: [NoLoginGuard]},
    { path: 'technology', component: TechnologyComponent, canActivate: [NoLoginGuard]},
    { path: 'beauty', component: BeautyComponent, canActivate: [NoLoginGuard]},
    { path: 'toys', component: ToysComponent, canActivate: [NoLoginGuard]},
    
  

    // { path: '**', pathMatch: 'full', redirectTo: 'login'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);