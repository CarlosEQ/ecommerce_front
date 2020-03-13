import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/dataservice/data.service';
import { Trabajador } from 'src/app/dataservice/trabajador';
import { Service } from 'src/app/dataservice/service';
import { Category } from 'src/app/dataservice/categoy';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';





@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent  {



  
  categories: Category [];

 
  constructor(private service: DataService,
		private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  async getCategories(){
		await this.service.get().then(categories => this.categories = categories);
  }

  delete(cli):void{
    this.service.deleteCategory(cli.id);
    this.categories = this.categories.filter(a => a !== cli);
  }
  enviar(categoy: Category){
    console.log("botón");

  }
  p(){
    console.log("s")
  }
  prueba(){
    console.log("revisar")
  }

  edit(category){
    this.service.deleteCategory(category.id);
    this.categories = this.categories.filter(a => a !== category);
  }

}
