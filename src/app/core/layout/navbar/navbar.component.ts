import {Component, inject, OnInit} from '@angular/core';
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {AuthFacadeService} from "@core/auth/data-access/auth.facade.service";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    RouterLink,
    MatListItemIcon,
    MatButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private readonly authFacade = inject(AuthFacadeService);
  isAuth = this.authFacade.isAuthenticated;

  public onLogout() {
    this.authFacade.logout();
  }
  ngOnInit() {
    console.log(this.isAuth())
  }
}
