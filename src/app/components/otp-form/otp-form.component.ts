import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MkBtnComponent } from "../mk-btn/mk-btn.component";
import { RouterLink } from '@angular/router';
import { OtpService } from '../../services/otp.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-otp-form',
  standalone: true,
  imports: [MkBtnComponent, RouterLink, FormsModule],
  templateUrl: './otp-form.component.html',
  styleUrl: './otp-form.component.css'
})
export class OtpFormComponent {
  verify: boolean = false;
  otpWindow: boolean = false;
  email: string;
  code: any;
  otpService: OtpService = inject(OtpService);
  // toaster : ToastrService = inject(ToastrModule)
  @ViewChild('emailInput') emailInput: ElementRef;


  // constructor(private otpService: OtpService) { }
  openOTP() {
    this.otpWindow = true;

  }



  verifyOTP() {
    this.email = this.emailInput.nativeElement.value
    if (!this.email.match(/^\S+@\S+\.\S+$/)) {
      console.log("Not Valid Email");
      return
    }

    this.otpService.generateOTP(this.email).subscribe(res => {
      this.code = res.info.code
      localStorage.setItem('code', res.info.code);


    },
      err => console.log(err))
    this.otpWindow = false;
    this.verify = true;
  }
  closePopUp() {
    console.log(this.code);
    console.log(localStorage.getItem('code'));
    if (this.code === localStorage.getItem('code')) {
      this.verify = false;
      return
    }
    this.verify = false;
    console.log("Wrong");
  }
  close() {
    this.otpWindow = false;
    this.verify = false;
  }

}

