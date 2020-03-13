import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';

  categories: Array<CategoryComponent>;

  category: CategoryComponent;


  i: number;  


  @ViewChild('form', {static: false, read: ViewContainerRef}) vc: ViewContainerRef;
  


  constructor(private factory: ComponentFactoryResolver, private activatedRoute: ActivatedRoute) {

    this.categories = new Array();
    this.i = 0;
  }

  ngOnInit() {
  }

  // loadCategories(): void {
  //   this.dataService.getCategories().then(categories => this.categories = categories);
  // }


  algo(id: string){
    console.log(id)
  }

  public createCategory(){

    const factory = this.factory.resolveComponentFactory(CategoryComponent);

    const componentRef = this.vc.createComponent(factory);

    this.i++;

    componentRef.instance.name = this.i.toString();
    
    this.vc.clear();  

    this.category = componentRef.instance;    
    
    this.categories.push(this.category);
  }


  public  hola(cat: CategoryComponent){
    
  }

}

