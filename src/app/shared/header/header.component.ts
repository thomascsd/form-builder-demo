import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false,
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
