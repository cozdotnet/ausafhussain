import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
  private token = new BehaviorSubject('');
  private email = new BehaviorSubject('');

  getLoginToken() {
    return this.token.asObservable();
  }

  updateLoginToken(newValue: string) {
    this.token.next(newValue);
  }

  getEmail() {
    return this.email.asObservable();
  }

  updateEmail(newValue: string) {
    this.email.next(newValue);
  }
}
