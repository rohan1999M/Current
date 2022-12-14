import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Classes/product';
import { CategoryService } from 'src/app/Services/Admin/category.service';
import { ProductService } from 'src/app/Services/Admin/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  categoryArray:any = []

  objProduct = new Product;


  constructor(private productServices:ProductService , private categoryService : CategoryService,private router : Router) { }
  
  ngOnInit(): void {           // Component lifeCycle method
    this. showCategory();
    
    
  }

 ProductForm = new FormGroup({        // ProductForm Group
  productName: new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.maxLength(90)]),
  category : new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required]),
 })

 showCategory(){
  return this.categoryService.getCategory().subscribe(res=>{
    // console.log(res); 
    this.categoryArray = res;
  },(er)=>{console.log(er)})
 }



 addPorduct(){
   
    let  category =this.ProductForm.value.category;
       this.objProduct.name = this.ProductForm.value.productName;
       this.objProduct.description = this.ProductForm.value.description;
       this.objProduct.category = this.ProductForm.value.category;
       this.objProduct.price = this.ProductForm.value.price;
       
      
    //  console.log(category)
     return this.productServices.addProduct(this.objProduct).subscribe(res=>{console.log(res);
      this.ProductForm.reset();
      this.router.navigate(['/SeeProduct'])

    },(er)=>{console.log(er)})
    
 }

//  ProductArray :any =[]  // Storing Production in this ARRAY from ShowProduct function.

//  showProducts(){       // Show Product function
   
//   return this.productServices.getProduct().subscribe(res=>{
//     // console.log(res);
//     this.ProductArray=res;   // adding data into array.
//     console.log("From Product Array",this.ProductArray)

//   },(error)=>{
//     console.log(error);
    
//   })
  
//  }

//   // ************* DELETE METHOD ***************

//   deleteRow(pro:any){
//     this.showContainer = false;
//     console.log("Form Delete row",pro)
//     this.productServices.deleteProduct(pro).subscribe(res=>{
//      console.log('Product delete with id '+ pro.id);
//      this.showProducts();
//     })
//   }

//   // ************ EDIT METHOD ***********
 
// public ID!:Number;
//  editRow(pro:any){
//   this.showContainer = true;
//   this.showAdd = false;
//   this.showUpdate = true;
  

//   console.log("Enter in EditRow", pro)
//   this.ID = pro.id;
//   this.ProductForm.controls['productName'].setValue(pro.name);
//   this.ProductForm.controls['description'].setValue(pro.description);
//   this.ProductForm.controls['category'].setValue(pro.category);
//   this.ProductForm.controls['price'].setValue(pro.price);
  
//   // this.FormDetail.controls['image'].setValue(emp.image) 
//  }

// //  showButton:boolean = true; // Displaying of button when update function click


//  updateProducts(){
//   // this.showUpdate = true;
//   // this.showAdd = false;
//   this.objProduct.id = this.ID;
//   console.log("Product Update",this.objProduct.id)
//   this.objProduct.name = this.ProductForm.value.productName;
//   this.objProduct.description = this.ProductForm.value.description;
//   this.objProduct.category = this.ProductForm.value.category;
//   this.objProduct.price = this.ProductForm.value.price;
//   this.objProduct.productPrice = this.ProductForm.value.price;
//    console.log(this.objProduct)
//   this.productServices.updateProduct(this.ID,this.objProduct).subscribe(res=>{
//   console.log(res);
//   let ref = document.getElementById('cancel')
//     ref?.click();
//     this.ProductForm.reset();
//     this.showContainer= false;
   
//     this.showProducts();
//     // this.getEmployee();
// },(error)=>{
//   console.log(error);
// })
//  }


}
