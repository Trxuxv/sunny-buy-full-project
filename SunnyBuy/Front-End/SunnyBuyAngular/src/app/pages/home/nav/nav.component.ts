import { ProductsService } from './../../products/products.service';
import { CountCartModel } from './../../cart/models/count-cart.model';
import { CartService } from './../../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { GetProduct } from '../../products/models/product.model';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/models/client.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  client: Client = {} as Client;
  searchText;
  products: GetProduct[];
  count: CountCartModel = {} as CountCartModel;

  constructor(
    private clientService: ClientService,
    private cartService: CartService,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.cartService.countingCart().subscribe()
    this.cartService.count.subscribe(x => { this.count = x })

    this.productsService.getAllProducts()
      .subscribe
      (
        x => { this.products = x }
      )
    this.clientService.getClientLoggedIn().subscribe(x => this.client = x);
  }

}
