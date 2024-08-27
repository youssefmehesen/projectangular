import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mk-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mk-icon.component.html',
  styleUrl: './mk-icon.component.css'
})
export class MkIconComponent {
  @Input() icon: string;
  iconStatus: boolean = false;
  getClass() {
    return this.iconStatus ? 'active' : 'inactive'
  }
}
