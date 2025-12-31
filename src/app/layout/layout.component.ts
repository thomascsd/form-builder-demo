import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styles: [
    `
      .main {
        min-height: 100%;
      }

      .content {
        flex: 1;
        display: flex;
        justify-content: center;
        // flex-direction: column;
      }

      app-header,
      app-footer {
        height: 50px;
      }
    `,
  ],
})
export class LayoutComponent {}
