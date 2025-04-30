import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { DUMMY_ITEMS } from '../../dummy-items';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itemdetails',
  standalone: true,
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css'],
  imports: [HeaderComponent, FooterComponent, CommonModule]
})
export class ItemdetailsComponent implements OnInit {
  product: any;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = DUMMY_ITEMS.find(item => item.id === productId);
    
    if (!this.product) {
      this.notFound = true;
    }
  }


  addToCart() {
    if (!this.product) {
      console.error('Produto não está definido');
      return;
    }

    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      avatar: this.product.avatar || 'assets/default-product.png'
    });
    
    alert(`${this.product.name} foi adicionado ao carrinho!`);
  }

  get imagePath() {
    return this.product?.avatar || 'assets/default-product.png';
  }
}