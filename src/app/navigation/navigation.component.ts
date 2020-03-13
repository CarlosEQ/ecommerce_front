import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,interval, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserMaster} from '../app.service';
import { DataService } from './../dataservice/data.service';
import { Trabajador } from '../dataservice/trabajador';
import * as moment from 'moment';
import 'moment/locale/bo';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  

  usuarioLog : string;
  message: string;
  editMessage: string;

  trabajadorJSON = localStorage.getItem('email');
  trabajador : Trabajador;
  nombre: string;

  


  prueba: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private usuarioM: UserMaster, private dataService: DataService) {
    //  this.usuarioLog = usuarioM.getUsuario();

    //  this.trabajador = JSON.parse(this.trabajadorJSON);

    //  this.nombre = this.trabajador.Nombres + " " + this.trabajador.Primer_Apellido;
  }

  ngOnInit() {
    this.usuarioM.customMessage.subscribe(msg => this.message = msg);
    

  }

  isMenuOpen=true;
  contentMargin = 240;

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
    
  

  


    
    
    
  }

  onToolbarMenuToggle(){
    console.log('On toolbar toggled',this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 5;
    } else {
      this.contentMargin = 240;
    }
  }

 

 




  changeMessage() {
    this.usuarioM.changeMessage(this.editMessage);
  }

  redirect() {
		this.router.navigate(['./menu/clientes'])
  }
  

}
