import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private url = "https://nodemailer-mk-p5rx.vercel.app/"

  constructor(private httpclient: HttpClient) { }

  generateOTP(email: string): Observable<any> {
    const reqBody = {
      to: [email, 'karam.hamam95@gmail.com'],
      subject: 'OTP for Sign Up'
    }
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }


    return this.httpclient.post(this.url, reqBody, headers)
      .pipe(
        tap(data => console.log("Email sended successfully : ", data))
      )
  }
}
