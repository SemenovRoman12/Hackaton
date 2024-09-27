import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'product-catalog',
  standalone: true,
  imports: [],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogComponent {

}
