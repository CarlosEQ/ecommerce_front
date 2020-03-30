import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../model/item';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  /**Create an instance of this class */
  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<BuyProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item) {
    
  }

  ngOnInit() {
  }

  /**Allow put the data items at the local storage and close the pop up window */
  validator() {

    localStorage.setItem("itemId", this.data.id.toString());

    this.dialogRef.close();

  }

    /**Allow bet bac to the previous UI */
    back(): void {
    
      localStorage.setItem("itemId", "-1");
      this.dialogRef.close();
    }

  

}
