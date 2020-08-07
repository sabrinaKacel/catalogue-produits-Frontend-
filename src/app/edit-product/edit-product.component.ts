import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;
  public url: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.productsService.getProduct(this.url)
    .subscribe(data => {
      this.currentProduct = data;
      console.log(this.currentProduct);
    }, err => {
      console.log(err);
    });
  }

  onEditProduct(p){
    this.productsService.editProduct(this.url, p)
    .subscribe(data => {
      this.router.navigateByUrl("/products");
    }, err =>{
      console.log(err);
    })
  }

}
