import { Component, OnInit } from '@angular/core';
import { HttpService } from './service.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordValidator } from './ispasswordvalid.component';
import { MessageService } from '../utils/message.services';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public LoginToken: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private httpService: HttpService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  submitLoginForm() {
    this.messageService.updateLoginToken('');

    if (this.form.invalid) {
      return;
    }

    // const email = this.form.controls['email'].value;
    // const password = this.form.controls['password'].value;

    this.httpService.LoginUser(this.email, this.password);
    localStorage.setItem('email', this.email);
    this.messageService.updateEmail(this.email);

    this.messageService.getLoginToken().subscribe(
      (value) => {
        this.LoginToken = value;
        if (value != '' && this.email !== '' && this.password !== '') {
          this.router.navigateByUrl('/home');
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log(error);
      }
    );

    // Reset the form
    this.form.reset();
  }
}
