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
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatCardModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SportsComponent } from './categories/sports/sports.component';
import { VehiclesComponent } from './categories/vehicles/vehicles.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { ToysComponent } from './categories/toys/toys.component';
import { AddProductComponent } from './add-product/add-product.component';





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
    
    
  ],
  imports: [
    BrowserModule,
    
    // este
    BrowserAnimationsModule,

    
    // este
    NgbModule,

    //este
    FormsModule,

    //este
    ReactiveFormsModule,

    //este
    MatIconModule,

    //este
    AppRoutingModule,

    //estos
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    
    
    
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
