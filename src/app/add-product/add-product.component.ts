import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Item } from '../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../dataservice/product-service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  itemControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  items = ["Sports", "Vehicles", "Technology", "Beauty", "Toys"];

  item = new Item();


  constructor(private _snackBar: MatSnackBar, private productService: ProductService) { }

  ngOnInit() {
  }

  /**
   * Allow validate that the form
   */
  validators() {

    if (this.item.name == null || this.item.name == "") {
      this._snackBar.open("Fill the name text box", "", { duration: 4000 });
    }

    else if (this.itemControl.value == null) {
      this._snackBar.open("Choose a category", "", { duration: 4000 });

    }
    // else if (this.file == null) {
    //   this._snackBar.open("Choose an image", "", { duration: 4000 });
    // }
    else if (this.item.description == null || this.item.description == "") {
      this._snackBar.open("Fill the description box", "", { duration: 4000 });
    }
    else if (this.item.price == null) {
      this._snackBar.open("Fill the price box", "", { duration: 4000 });
    }
    else if (this.item.weight == null) {
      this._snackBar.open("Fill the weight box", "", { duration: 4000 });
    }
    else {

      let id_category = this.setCategory();
      this.item.id_category = id_category;
      let status = this.saveItem();

      this.saveItem();
    }
    
  }

 
  setCategory(): number{
    if(this.itemControl.value == "Sports"){
      return 1;
    }
    else if(this.itemControl.value == "Vehicles"){
      return 2;
    }
    else if(this.itemControl.value == "Technology"){
      return 3;
    }
    else if(this.itemControl.value == "Beauty"){
      return 4;
    }
    else if(this.itemControl.value == "Toys"){
      return 5;
    }

  }
  saveItem(): void{

    this.productService.postProduct(this.item)
      .then(
        () =>  this._snackBar.open("Succes!", "", {duration: 3000}),
        () =>  this._snackBar.open("Failed!", "", {duration: 3000}),
      )
    }




}
