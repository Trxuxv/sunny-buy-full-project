import { environment } from 'src/environments/environment';
import { GetProduct } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private _products = new BehaviorSubject<GetProduct[]>([]);
  public products = this._products.asObservable();

  constructor(private http: HttpClient) { }

  /*------------------public------------------*/
  public getAllProducts() {
    return this._getAllProducts();
  }

  public getProductsCategory(categoryid: number) {
    return this._getProductsCategory(categoryid);
  }

  public getProductDetail(id: number) {
    return this._getProductDetail(id);
  }

  /*-----------------private-----------------*/

  private _getAllProducts() {
    return this.http
      .get<GetProduct[]>(apiUrl + '/product/product.json')
      .pipe
      (
        take(1)
      );
  }

  private _getProductsCategory(categoryid: number) {
    return this.http
      .get<GetProduct[]>(apiUrl + 'product/product.json')
      .pipe(
        map(x => x.find(x => x.categoryId === categoryid))
      );
  }

  private _getProductDetail(id: number) {
    return this.http
      .get<GetProduct>(apiUrl + '/product/product.json')
      .pipe(
        filter(x => x.productId === id)
      );
  }
}