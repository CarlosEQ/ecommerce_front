import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dataservice/product-service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  private CATEGORY_ID = 2;
  private products;
  private userSession;

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit() {
    this.loadProducts();
    this.userSession = localStorage.getItem("session");
    console.log(this.userSession)
  }

   /**
   * Load the items from the database calling his service
   */
  loadProducts() {
    this.productService.getProductByCategoryId(this.CATEGORY_ID).subscribe((products: Item[]) => {
      this.products = products;
      console.log(this.products)
    })
    
  }

}
