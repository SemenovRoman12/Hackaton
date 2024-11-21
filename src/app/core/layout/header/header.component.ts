import {ChangeDetectionStrategy, Component, output,} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public drawerToggle = output();

  public onToggleDrawer() {
    this.drawerToggle.emit();
  }
}
