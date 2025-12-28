import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      nav {
        border-top: 6px solid #40aff4;
      }
    `,
  ],
  imports: [RouterLink],
})
export class HeaderComponent {
  @Input() buttonText = 'Write Diary';
  @Input() buttonVisible = false;
  @Input() signInButtonVisible = true;
  @Output() clicked = new EventEmitter<void>();
  @Output() logedIn = new EventEmitter<void>();

  onclick(evt: Event) {
    evt.preventDefault();
    this.clicked.emit();
  }

  onLogedIn(evt: Event) {
    evt.preventDefault();
    this.logedIn.emit();
  }
}
