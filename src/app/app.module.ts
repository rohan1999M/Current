import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoryComponent } from './Components/Admin/list-category/list-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductsComponent } from './Components/Admin/add-products/add-products.component';
import {HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Materials
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavBarsComponent } from './Components/nav-bars/nav-bars.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { SeeProductsComponent } from './Components/Admin/see-products/see-products.component';
// import { ModalComponent } from './Components/Users/modal/modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { AngularTableComponent } from './Components/Users/angular-table/angular-table.component';
import { DialogBoxComponent } from './Components/Users/dialog-box/dialog-box.component';
import { DeleteDialogBoxComponent } from './Components/Admin/delete-dialog-box/delete-dialog-box.component';





@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    AddProductsComponent,
    AddCategoryComponent,
    NavBarsComponent,
    SeeProductsComponent,
    AngularTableComponent,
    DialogBoxComponent,
    DeleteDialogBoxComponent,
    // ModalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
