import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/Classes/product';
import { CategoryService } from 'src/app/Services/Admin/category.service';
import { ProductService } from 'src/app/Services/Admin/product.service';

@Component({
  selector: 'app-see-products',
  templateUrl: './see-products.component.html',
  styleUrls: ['./see-products.component.css']
})
export class SeeProductsComponent implements OnInit {

  categoryArray:any = []

  objProduct = new Product;
  ShowContainer:boolean =false;


  constructor(private productServices:ProductService , private categoryService : CategoryService) { }
  
  ngOnInit(): void {           // Component lifeCycle method
    this. showCategory();
    this.showProducts();
    
    
  }

 ProductForm = new FormGroup({        // ProductForm Group
  productName: new FormControl(),
  description:new FormControl(),
  category : new FormControl(),
  price:new FormControl(),
 })

 showCategory(){
  return this.categoryService.getCategory().subscribe(res=>{
    // console.log(res); 
    this.categoryArray = res;
  },(er)=>{console.log(er)})
 }

  ProductArray :any =[]  // Storing Production in this ARRAY from ShowProduct function.

  showProducts(){       // Show Product function
    
   return this.productServices.getProduct().subscribe(res=>{
     // console.log(res);
     this.ProductArray=res;   // adding data into array.
     console.log("From Product Array",this.ProductArray)
 
   },(error)=>{
     console.log(error);
     
   })
   
  }
 
   // ************* DELETE METHOD ***************
 
   deleteRow(pro:any){
     
     console.log("Form Delete row",pro)
     this.productServices.deleteProduct(pro).subscribe(res=>{
      console.log('Product delete with id '+ pro.id);
      this.ShowContainer = false;
      this.showProducts();
     })
   }
 
   // ************ EDIT METHOD ***********
  
 public ID!:Number;
  editRow(pro:any){
    this.ShowContainer = true;
 
   console.log("Enter in EditRow", pro)
   this.ID = pro.id;
   this.ProductForm.controls['productName'].setValue(pro.name);
   this.ProductForm.controls['description'].setValue(pro.description);
   this.ProductForm.controls['category'].setValue(pro.category);
   this.ProductForm.controls['price'].setValue(pro.price);
   
   // this.FormDetail.controls['image'].setValue(emp.image) 
  }
 
 //  showButton:boolean = true; // Displaying of button when update function click
 
 
  updateProducts(){
   // this.showUpdate = true;
   // this.showAdd = false;
   this.objProduct.id = this.ID;
   console.log("Product Update",this.objProduct.id)
   this.objProduct.name = this.ProductForm.value.productName;
   this.objProduct.description = this.ProductForm.value.description;
   this.objProduct.category = this.ProductForm.value.category;
   this.objProduct.price = this.ProductForm.value.price;
   this.objProduct.productPrice = this.ProductForm.value.price;
    console.log(this.objProduct)
   this.productServices.updateProduct(this.ID,this.objProduct).subscribe(res=>{
   console.log(res);
   let ref = document.getElementById('cancel')
     ref?.click();
     this.ProductForm.reset();
     this.ShowContainer = false;
 
    
     this.showProducts();
     // this.getEmployee();
 },(error)=>{
   console.log(error);
 })
  }

  close()
{
  this.ShowContainer = false;
} 
 

}
