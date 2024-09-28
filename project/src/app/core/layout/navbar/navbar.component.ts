import {Component, inject} from '@angular/core';
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {AuthFacadeService} from "@core/auth/data-access/auth.facade.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    RouterLink,
    MatListItemIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly authFacade = inject(AuthFacadeService);

  public onLogout() {
    this.authFacade.logout();
  }
}
