import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';

  


  
  


  constructor(private router: Router) {

    
  }

  ngOnInit() {

  }

  addProduct(){
    this.router.navigate(['./add-product'])
  }

}

