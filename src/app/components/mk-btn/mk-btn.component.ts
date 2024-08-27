import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mk-btn',
  standalone: true,
  imports: [],
  templateUrl: './mk-btn.component.html',
  styleUrl: './mk-btn.component.css'
})
export class MkBtnComponent {
  @Input() btnText: any;

}
