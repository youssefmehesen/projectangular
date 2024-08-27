import { Component } from '@angular/core';
import { MkBtnComponent } from '../../components/mk-btn/mk-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MkBtnComponent, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signup: string = 'assets/images/join-us.jpg'

}
