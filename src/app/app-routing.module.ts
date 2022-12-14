import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { AddProductsComponent } from './Components/Admin/add-products/add-products.component';
import { ListCategoryComponent } from './Components/Admin/list-category/list-category.component';
import { SeeProductsComponent } from './Components/Admin/see-products/see-products.component';
import { AngularTableComponent } from './Components/Users/angular-table/angular-table.component';

const routes: Routes = [
  {path:"addCategory", component:AddCategoryComponent},
  {path:"ListCategory", component:ListCategoryComponent},
  {path:"AddProduct",component:AddProductsComponent},
  {path:"SeeProduct",component:SeeProductsComponent},
  {path:"T",component:AngularTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
