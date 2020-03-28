import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dataservice/product-service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {

  private CATEGORY_ID = 4;
  private products;

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit() {
  }

  /**
   * Load the items from the database calling his service
   */
  loadProducts() {
    this.productService.getProductByCategoryId(this.CATEGORY_ID).subscribe((products: Item[]) => {
      this.products = products;
      // this.castingImages(products)
    })

  }

}
