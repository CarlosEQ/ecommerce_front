import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Category } from 'src/app/dataservice/categoy';
import { Service } from 'src/app/dataservice/service';
import { DataService } from 'src/app/dataservice/data.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  category: Category = new Category();
  

 
  constructor(private dataService: DataService,
    private router: Router) {  }
    

    save(): void {
      this.dataService.createCategory(this.category)
        .then(
          () => this.redirect(),
          () => console.log("Error"),
        )
  
    }
    redirect() {
      this.router.navigate(['./menu/categories'])
    }

  ngOnInit() {
  }

}
