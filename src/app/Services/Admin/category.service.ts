import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  addCategory (Body:any){

    return this.http.post('http://localhost:3000/Category',Body)

  }

  getCategory(){

    return this.http.get('http://localhost:3000/Category');

  }

    updateCategory(id:Number,data:any){
 
      return this.http.put('http://localhost:3000/Category/'+id,data)
    }
  
     
    deleteCategory(id:Number){
      console.log(id)
  
    return this.http.delete('http://localhost:3000/Category/'+id)
    
    }
  


}
