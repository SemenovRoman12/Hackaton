import {Component, inject} from '@angular/core';
import {FooterComponent} from "@core/layout/footer/footer.component";
import {HeaderComponent} from "@core/layout/header/header.component";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {NavbarComponent} from "@core/layout/navbar/navbar.component";
import {PushPipe} from "@ngrx/component";
import {RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, take, withLatestFrom} from "rxjs";

@Component({
  selector: 'app-base-layout',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        NavbarComponent,
        PushPipe,
        RouterOutlet
    ],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BaseLayoutComponent {
  public readonly breakpointObserver = inject(BreakpointObserver);
  private readonly handset$ = this.breakpointObserver.observe(Breakpoints.Handset);
  private readonly handsetLandscape$ = this.breakpointObserver.observe(Breakpoints.HandsetLandscape);

  public readonly isMobile$ = this.handset$.pipe(
    withLatestFrom(this.handsetLandscape$),
    map(([handset, handsetLandscape]) => (handset.matches && !handsetLandscape.matches))
  );

  public opened!: boolean;

  public closeDrawerOnTouch(matDrawer: MatDrawer) {
    this.isMobile$.pipe(take(1)).subscribe((isMobile$) => {
      if (isMobile$) {
        matDrawer.close();
      }
    });
  }
}
