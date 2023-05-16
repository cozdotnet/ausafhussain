import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/utils/message.services';

const peturi = 'https://localhost:7251/pet';

@Injectable({
  providedIn: 'root',
})
export class PetHttpService {
  private getUpcomingSession = '/getUpcomingSession';
  private createPetSession = '/createPetSession';
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  GetUpcomingSession(UserId: number) {
    return this.http.get(peturi + this.getUpcomingSession + '/' + UserId);
  }

  CreatePetSession(
    UserId: number,
    Name: string,
    MedicalName: string,
    Date: Date
  ) {
    let req = {
      userid: UserId,
      name: Name,
      medicalname: MedicalName,
      date: Date,
    };
    this.http.post(peturi + this.createPetSession, req).subscribe((res) => {});
  }
}
