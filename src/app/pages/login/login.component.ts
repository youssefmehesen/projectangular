import { Component } from '@angular/core';
import { MkBtnComponent } from '../../components/mk-btn/mk-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MkBtnComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signup: string = 'assets/images/join-us.jpg'
}
