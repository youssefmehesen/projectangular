import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MkSubmitFormComponent } from '../../components/mk-submit-form/mk-submit-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MkSubmitFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  fields: any[];
  constructor() {
    this.fields = [
      { name: 'name', value: '', validators: [Validators.required] },
      { name: 'phone', value: '', validators: [Validators.required] },
      { name: 'email', value: '', validators: [Validators.required, Validators.email] },
      { name: 'message', value: '', validators: [Validators.required, Validators.minLength(10)] },
    ];
  }



}
