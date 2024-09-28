import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {ProductEntity} from "@features/feature-product-catalog/data-access/models/product.model";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {RoundPipe} from "@pipes/round.pipe";
import {AuthFacadeService} from "@core/auth/data-access/auth.facade.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    RoundPipe,
    MatButton,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  private readonly authFacade = inject(AuthFacadeService);
  public product = input.required<ProductEntity>();
  public readonly isAuthenticated = this.authFacade.isAuthenticated;
}
