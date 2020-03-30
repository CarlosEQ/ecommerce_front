import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dataservice/product-service';
import { Item } from 'src/app/model/item';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BuyProductComponent } from 'src/app/buy-product/buy-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {

  private CATEGORY_ID = 4;
  private products;
  usdPrice;
  session: boolean;

  constructor(private productService: ProductService, private http: HttpClient, private sanitizer: DomSanitizer, private dialog: MatDialog) {
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
  getSession(): boolean {
    if (localStorage.getItem("currentUser") == null) {
      return false;
    }
    return localStorage.getItem("currentUser").toString() == "loggedin";

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

  /**
   * function to delete an item by his id
   * @param itemId item's id to be deleted
   */
  deleteItem(itemId) {
    this.productService.deleteProduct(itemId);
    window.location.reload();
  }

  /**
  * Allow to open a dialog component as a pop up, receiving a data to work with it
  * @param item Contains the data
  */
  openDialog(item): void {

    console.log("item: " + item.price)

    const dialogRef = this.dialog.open(BuyProductComponent, {
      width: '350px',
      height: '500px',
      data: { id: item.id, name: item.name, cop: item.price, usd: item.price * this.usdPrice, description: item.description, weight: item.weight, picture: item.picture }
    });

    dialogRef.afterClosed().subscribe(result => {


      let itemId = parseInt(localStorage.getItem("itemId"));

      if(itemId >= -1){
        this.productService.deleteProduct(itemId);
        window.location.reload();
        localStorage.removeItem("itemId");
      }
    });
  }

}
