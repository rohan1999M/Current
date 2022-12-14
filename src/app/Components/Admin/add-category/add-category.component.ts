import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Admin/category.service';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  adminService: any;
  message!:String;
  show:Boolean = false;

  constructor(private categoryServices :CategoryService, private router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  // CatForm = new FormGroup({         // Category Form Group
  //   category : new FormControl('',[Validators.required])
  //  })
    
  CatForm = new FormGroup({
    categoryName: new FormControl('',[Validators.required])
  })
  

   // Function for ADD Category
 add(){
  let key = this.CatForm.value.category;
  const postBody = {
    categoryName : this.CatForm.value.categoryName
  } 
  return this.categoryServices.addCategory(postBody).subscribe(res=>{
    console.log(res);
    this.CatForm.reset();
    this.show = true;
    this.message="Successfully Added";
    
    
    setTimeout(() => this.message = "", 500,this.dialog.closeAll() );
        
    // this.dialog.closeAll();
        // this.router.navigate(['/ListCategory'])

    // this. showCategory();
  },(er)=>{console.log(er)})
}
 
}