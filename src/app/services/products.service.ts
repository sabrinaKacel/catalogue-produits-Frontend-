import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public host:string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getProducts(page: number, size: number) {
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getProductsByKeyword(keyword:string, page: number, size: number) {
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+keyword+"&page="+page+"&size="+size);
  }

  public deleteProduct(url){
    return this.httpClient.delete(url);
  }

  public saveProduct(url, data):Observable<Product>{
    return this.httpClient.post<Product>(url, data);
  }

  public getProduct(url): Observable<Product>{
    return this.httpClient.get<Product>(url);
  }

  public editProduct(url, data){
    return this.httpClient.put(url, data);
  }
}
