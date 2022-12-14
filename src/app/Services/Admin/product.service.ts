import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(body:Product){
   
    return this.http.post('http://localhost:3000/Products/',body);
  }
  
  getProduct(){
    return this.http.get('http://localhost:3000/Products');
  }

   updateProduct(id:any,data:Product){
    // return this.http.put<EmpModel>('http://localhost:8080/api/updateemployee/'+ id,data)
    return this.http.put('http://localhost:3000/Products/'+id,data)
  }
  
  deleteProduct(id:any){
    console.log(id)
  //  return  this.http.delete<EmpModel>('http://localhost:8080/api/deleteemployee/'+id)
  return this.http.delete('http://localhost:3000/Products/'+id)
  
  }

}
