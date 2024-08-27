import { Component } from '@angular/core';
import { MkBtnComponent } from '../../components/mk-btn/mk-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [MkBtnComponent, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
