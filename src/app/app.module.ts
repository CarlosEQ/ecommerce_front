import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatCardModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CategoryComponent } from './category/category.component';
import { DataService } from './dataservice/data.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminSiteComponent,
    RegisterComponent,
    CategoryComponent
    
    
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
  entryComponents: [CategoryComponent],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
