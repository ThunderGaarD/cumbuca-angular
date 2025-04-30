import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
goToHome() {
  this.router.navigate(['/']);
}
  constructor(private router: Router) {}

  openCart() {
    this.router.navigate(['/cart']);
  }
}