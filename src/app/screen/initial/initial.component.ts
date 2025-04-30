import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ItemComponent } from "../items/items.component";
import { DUMMY_ITEMS } from '../../dummy-items';
import { ItemdetailsComponent } from "../itemdetails/itemdetails.component";
import { FooterComponent } from "../footer/footer.component";
import { CartComponent } from "../cart/cart.component";
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent {
  item = DUMMY_ITEMS;

  constructor(private router: Router, private cartService: CartService) {}

  viewProduct(id: string) {
    console.log('Navegando para produto ID:', id); 
    

    this.router.navigateByUrl(`/products/${id}`);
  }


  addToCart(product: any) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      avatar: product.avatar
    });
    alert(`${product.name} foi adicionado ao carrinho!`);
  }
}