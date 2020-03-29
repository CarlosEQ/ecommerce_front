import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dataservice/product-service';
import { Item } from 'src/app/model/item';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  private CATEGORY_ID = 2;
  private products;
  usdPrice;
  session : boolean;

  constructor(private productService: ProductService, private http: HttpClient, private sanitizer: DomSanitizer) { 
    this.products = [];
  }

  ngOnInit() {
    this.session = this.getSession();
    this.loadProducts();
    this.getUSD();

  }

   /**
   * Load the items from the database calling his service
   */
  loadProducts() {
    this.productService.getProductByCategoryId(this.CATEGORY_ID).subscribe((products: Item[]) => {
      this.products = products;
      this.castingImages(products)
    })
    
  }
  /**
   * Allow to know if the user is logged
   */
  getSession(): boolean{
    if(localStorage.getItem("currentUser") == null ){
      return false;
    }
    return localStorage.getItem("currentUser").toString() ==  "loggedin";

  }

   /**
   * Allow connet to the api to the Currency api
   */
  getUSD() {
    
    const url = 'http://api.currencylayer.com/live?access_key=71da1f70b4f6df7e6f41442de3bd9d6a&currencies=COP&format=1';

    this.http.jsonp(url, 'callback')
      .pipe().subscribe(data => {

        let json = JSON.stringify(data)

        let dataJSON = JSON.parse(json);

        this.usdPrice = dataJSON.quotes.USDCOP
      });

  }

   /**
   * Convert the picture in base64 format from the backend to a picture, in a item's array
   * @param products Array with items
   */
  castingImages(products: Item[]): boolean {
    for (let i = 0; i < products.length; i++) {
      products[i].picture = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + products[i].picture);
    }
    return true;

  }

}
