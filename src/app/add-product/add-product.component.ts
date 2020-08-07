import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private currentProduct: Product;
  public mode = 1;

  constructor(private serviceProduct: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  onSaveProduct(data: any){
    this.serviceProduct.saveProduct(this.serviceProduct.host+"/produits",data)
    .subscribe(resp => {
      //this.router.navigateByUrl("/products");
      this.currentProduct = resp;
      this.mode = 2;
    }, err => {
      console.log(err);
    });
  }

  onAddProduct(){
    this.mode = 1;
  }

}
