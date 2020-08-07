import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any; 
  public size:number = 5;
  public currentPage:number = 0;
  public totalPages:number;
  public pages: Array<number>;
  currentKeyword: string = "";

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  
onPageProduct(i){
  this.currentPage = i;
  this.searchProducts();
}

onSearch(form: any){
  this.currentPage = 0;
  this.currentKeyword = form.keyword;
  this.searchProducts(); 
}

searchProducts(){
  this.productService.getProductsByKeyword(this.currentKeyword, this.currentPage, this.size)
  .subscribe(data=> {
    this.totalPages = data["page"].totalPages;
    this.pages = new Array<number>(this.totalPages);
    this.products = data;
  }, err => {
    console.log(err);
  });
}

onDelete(p){
  let conf = confirm("Etes-vous sure??");
  if (conf) {
    this.productService.deleteProduct(p._links.self.href)
    .subscribe(data=> {
      this.searchProducts();
    }, err => {
      console.log(err);
    });
  }
}

onEdit(p){
  let url = p._links.self.href;
  this.router.navigateByUrl("/editProduct/"+btoa(url));
}
}
