import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../utils/message.services';

const uri = 'https://localhost:7251/auth';

const peturi = 'https://localhost:7251/pet';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private getUserDetails = '/getUser';
  private getAllPetSchedules = '/getAllPetSchedules';
  private deletePetDetails = '/deletePetSession';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  GetUserDetails(Username: string) {
    return this.http.get(uri + this.getUserDetails + '/' + Username);
  }

  GetPetDetails(UserId: number) {
    return this.http.get(peturi + this.getAllPetSchedules + '/' + UserId);
  }

  DeletePetDetails(PetId: number) {
    console.log(peturi + this.deletePetDetails + '/' + PetId);

    return this.http.delete(peturi + this.deletePetDetails + '/' + PetId);
  }
}
