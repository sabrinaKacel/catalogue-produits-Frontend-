import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path: "products", component: ProduitsComponent
  }, 
  {
    path: "addProduct", component: AddProductComponent
  },
  {
    path: "editProduct/:id", component: EditProductComponent
  },
  {
    path:"", redirectTo:"/products", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
