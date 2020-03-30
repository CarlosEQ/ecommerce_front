import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './categories/sports/sports.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { ToysComponent } from './categories/toys/toys.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './loginservive/auth-guard';



var routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'beauty', component: BeautyComponent},
  { path: 'toys', component: ToysComponent},
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];



@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { } 
