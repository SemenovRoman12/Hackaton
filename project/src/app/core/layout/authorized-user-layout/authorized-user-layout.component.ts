import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FooterComponent} from "@core/layout/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "@core/layout/header/header.component";
import {MatDrawer, MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {NavbarComponent} from "@core/layout/navbar/navbar.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, take, withLatestFrom} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {PushPipe} from "@ngrx/component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-authorized-user-layout',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    NavbarComponent,
    AsyncPipe,
    PushPipe,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserLayoutComponent {
  public readonly breakpointObserver = inject(BreakpointObserver);
  private readonly handset$ = this.breakpointObserver.observe(Breakpoints.Handset);
  private readonly handsetLandscape$ = this.breakpointObserver.observe(Breakpoints.HandsetLandscape);

  public readonly isMobile$ = this.handset$.pipe(
    withLatestFrom(this.handsetLandscape$),
    map(([handset, handsetLandscape]) => !!(handset.matches && !handsetLandscape.matches))
  );

  public opened!: boolean;

  public closeDrawerOnTouch(sidenav: MatDrawer) {
    this.isMobile$.pipe(take(1)).subscribe((isMobile$) => {
      if (isMobile$) {
        sidenav.close();
      }
    });
  }
}
