import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
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
