import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dataservice/product-service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  private CATEGORY_ID = 5;
  private products;

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit() {
    this.loadProducts();
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
