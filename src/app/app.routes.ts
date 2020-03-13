import { Routes, RouterModule } from "@angular/router";

import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginGuard} from './login.guard';
import {NoLoginGuard} from './no-login.guard';
import {ListaComponent} from './usuarios/lista/lista.component';
import {RegistrarComponent} from './usuarios/registrar/registrar.component';
import {TrabajadoresComponent} from './trabajadores/trabajadores.component';
import {AddTrabajadorComponent} from './trabajadores/add-trabajador/add-trabajador.component';
import { CompraComponent } from './herramientas/compra/compra.component';
import { AddCategoryComponent } from './herramientas/compra/add-category/add-category.component';
import { RegisterComponent } from './register/register.component';



const ROUTES: Routes = [

    { path: '', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [NoLoginGuard]},
    
    { path: 'menu', component: NavigationComponent, canActivate: [LoginGuard], children:[
        

        
        { path: 'usuarios', component: ListaComponent, canActivate: [LoginGuard]},
        { path: 'registrar', component: RegistrarComponent, canActivate: [LoginGuard]},


        

        { 
            path: 'trabajadores',
            children: [
                {
                    path: '',
                    component: TrabajadoresComponent, canActivate: [LoginGuard],
                },{
                    path: 'addTrabajadores',
                    component: AddTrabajadorComponent, canActivate: [LoginGuard]
                }
            ]
        },

        { 
            path: 'categories',
            children: [
                {
                    path: '',
                    component: CompraComponent, canActivate: [LoginGuard],
                },{
                    path: 'addCategories',
                    component: AddCategoryComponent, canActivate: [LoginGuard]
                }
            ]
        },


    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);