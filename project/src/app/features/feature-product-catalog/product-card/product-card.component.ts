import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ProductEntity} from "@features/feature-product-catalog/data-access/models/product.model";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  public product = input.required<ProductEntity>(); // <- я не знаю почему без undefined не запускается
}
