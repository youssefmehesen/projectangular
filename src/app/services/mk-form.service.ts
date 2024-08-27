import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MkFormService {
  private form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  createForm(fields: any[]): FormGroup {
    let formGroup: any = {}
    fields.forEach(field => {
      formGroup[field.name] = [field.value || '', field.validators || []]
    });
    this.form = this.fb.group(formGroup)
    return this.form
  }

  getFrom() {
    this.form = this.form
  }


}
