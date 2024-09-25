import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from "@core/http/api.service";

@Component({
  selector: 'product-catalog-container',
  standalone: true,
  imports: [],
  templateUrl: './product-catalog-container.component.html',
  styleUrl: './product-catalog-container.component.scss'
})
export class ProductCatalogContainerComponent implements OnInit{
  private readonly apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.get<any>('/cart').subscribe(
      v => console.log(v)
    )
  }
}
