import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, MatBadgeModule, MatDividerModule, MatTooltipModule, MatSnackBarModule, MatTabsModule, MatAutocompleteModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatTableModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SportsComponent } from './categories/sports/sports.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { ToysComponent } from './categories/toys/toys.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductService } from './dataservice/product-service';
import { UserService } from './dataservice/user-service';
import { LoginPopComponent } from './login-pop/login-pop.component';
import { RegisterPopComponent } from './register-pop/register-pop.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SportsComponent,
    VehiclesComponent,
    TechnologyComponent,
    BeautyComponent,
    ToysComponent,
    AddProductComponent,
    LoginPopComponent,
    RegisterPopComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,


    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    AppRoutingModule, 
    BrowserAnimationsModule,   
    BrowserModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,


    FormsModule,
    
    
    
  ],
  entryComponents: [LoginPopComponent, RegisterPopComponent],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }
