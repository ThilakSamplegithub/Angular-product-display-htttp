import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { ProductService } from '../product.service'; // Import the ProductService

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    // Fetch and display the list of products
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  navigateToProductDetails(productId: number): void {
    // Navigate to the product details page for the selected product
    this.router.navigate(['/product', productId]);
  }
}
