import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../Admin/add-category/add-category.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';



@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.css']
})
export class AngularTableComponent implements OnInit {

 

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  // openDialog(){
  //   this.dialog.open(DialogComponent).afterClosed()
  //   .subscribe(val=>{
  //     if(val === 'save'){
  //       this.getAllCategories();
  //     }
  //   })
  // } 

  openDialog(){
    this.dialog.open(AddCategoryComponent).afterClosed()

  }
}
