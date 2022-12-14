import { Component, OnInit } from '@angular/core';
import { AnyAaaaRecord } from 'dns';
import { CategoryService } from 'src/app/Services/Admin/category.service';
import { ProductService } from 'src/app/Services/Admin/product.service';


@Component({
  selector: 'app-nav-bars',
  templateUrl: './nav-bars.component.html',
  styleUrls: ['./nav-bars.component.css']
})
export class NavBarsComponent implements OnInit {

  constructor(public adminServices : CategoryService, public productService:ProductService) { }
  Products:any = [];
  productByCategory:any = [];
  Category:any = []
  ngOnInit(): void {
    this.getCategoryes();
  }
  getCategoryes(){
    this.adminServices.getCategory().subscribe(res=>{
      console.log(res);
      this.Category = res;
    },(er)=>{
      console.log(er)
    })
  }

  MenuClick(){
   this.getCategoryes()
  }
   


  ChooseMenu(cat:any){
      console.log(cat);
      this.productService.getProduct().subscribe(res=>{
        // console.log(res);
        this.Products = res;
         
      },(error)=>{
          console.log(error)
      })
  }
 


 
}
