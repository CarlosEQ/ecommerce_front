import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Item } from '../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../dataservice/product-service';
import { Router } from '@angular/router';



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

  base64textString: string;

  file = null;

  constructor(private reouter: Router, private _snackBar: MatSnackBar, private productService: ProductService) { }

  ngOnInit() {
  }

  /**
   * Allow validate that the form
   */
  async validators() {

    if (this.item.name == null || this.item.name == "") {
      this._snackBar.open("Fill the name text box", "", { duration: 4000 });
    }

    else if (this.itemControl.value == null) {
      this._snackBar.open("Choose a category", "", { duration: 4000 });

    }
    
    else if (this.file == null) {
      this._snackBar.open("Choose an image", "", { duration: 4000 });
    }
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
      this.item.picture = this.file;
      
      



      await this.saveItem();
      this.redirect();
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
  async saveItem(): Promise<void>{

    await this.productService.postProduct(this.item)
      .then(
        () =>  this._snackBar.open("Succes!", "", {duration: 3000}),
        () =>  this._snackBar.open("Failed!", "", {duration: 3000}),
      )
    }


    redirect(){
      this.reouter.navigate(["home"]);
    }


    /**
   * Parse a picture to base 64 file
   * @param evt event that accion the upload file
   */
  getBase64(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  /**
   * File on load with a event click
   * @param readerEvt event with the reader
   */
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    this.file = btoa(binaryString);


  }

}
