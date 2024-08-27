import { Component, Input } from '@angular/core';
import { MkFormService } from '../../services/mk-form.service';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MkBtnComponent } from '../../components/mk-btn/mk-btn.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-mk-submit-form',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe, MkBtnComponent],
  templateUrl: './mk-submit-form.component.html',
  styleUrl: './mk-submit-form.component.css'
})
export class MkSubmitFormComponent {
  @Input() fields;

  form: FormGroup;





  constructor(private mkFormService: MkFormService) { }
  ngOnInit(): void {

    this.form = this.mkFormService.createForm(this.fields);
  }


  onSubmit() {
    console.log("Inside");
    console.log(this.form.valid);
    if (this.form) {
      console.log("Inside");

      console.log(this.form.value);
    }
  }
}
