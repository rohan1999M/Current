import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/app/Services/Admin/category.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteDialogBoxComponent } from '../delete-dialog-box/delete-dialog-box.component';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
   

  showCategory:any =[] 
  constructor(private categoryServices:CategoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategory();
  
  }
    
//  showCategory:any =[] 
  getCategory(){
    this.categoryServices.getCategory().subscribe(res=>{console.log(res); this.showCategory = res},(error)=>{console.log(error)})
  }

  CatForm = new FormGroup({         // Category Form Group
    categoryName : new FormControl()
   })


  // ************ EDIT METHOD ***********
 
  showUpdate:boolean = false;
  public ID!:Number;
  hide:Boolean = true;
  editRow(pro:any){   //UPDATE BY ID 
    // this.dialog.open(AddCategoryComponent);
   this.showUpdate = true;
   this.hide = false;
   console.log("Enter in EditRow", pro)
   this.ID = pro.id;
   this.CatForm.controls['categoryName'].setValue(pro.categoryName);

  }

  objCategory:Category = new Category;  // Creating new  object of Category class
  updateCategory(){  //UPDATE 
     
     this.objCategory.categoryName = this.CatForm.value.categoryName;
     this.objCategory.id = this.ID;
        
 this.categoryServices.updateCategory(this.objCategory.id,this.objCategory).subscribe(res=>{
   console.log(res);
   let ref = document.getElementById('cancel')
     ref?.click();
     this.CatForm.reset();
     this.getCategory();
     this.hide = true;
     this.showUpdate = false;
  
 },(error)=>{
   console.log(error);
 })
  
}

// DELETE BY ID 
  deleteRow(category:Number){
   
    // const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
    //   width: '450px',
    // });
    // var check = prompt("Please enter your name");
    console.log("Form Delete row",category)
    this.categoryServices.deleteCategory(category).subscribe(res=>{
     console.log('Category delete with id '+category);
     this.ngOnInit();
    //  this.showUpdate = false;
    })
    
  }

  // openDialog(){
  //   this.dialog.open(AddCategoryComponent).afterClosed();
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '450px',
    });
  }

}
