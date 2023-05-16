import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../utils/message.services';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private response: string = '';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  async LoginUser(Username: string, Password: string) {
    let req = {
      username: Username,
      password: Password,
    };

    await this.http
      .post('https://localhost:7251/auth/login', req)
      .toPromise()
      .then((response: any) => {
        this.response = response['token'];
        this.messageService.updateLoginToken(this.response);
        localStorage.setItem('token', this.response);
      })
      .catch((error) => {
        this.response = error.ok;
      });
  }
}
