import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MkSubmitFormComponent } from '../../components/mk-submit-form/mk-submit-form.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule, MkSubmitFormComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  fields: any[];

  constructor() {
    this.fields = [
      { name: 'first name', value: '', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
      { name: 'last name', value: '', validators: [Validators.required] },
      { name: 'email', value: '', validators: [Validators.required] },
      { name: 'address', value: '', validators: [Validators.required] },
      { name: 'current password', value: '', validators: [Validators.required] },
      { name: 'new Password', value: '', validators: [Validators.required] },
      { name: 'comfirm password', value: '', validators: [Validators.required] }
    ]
  }
}
