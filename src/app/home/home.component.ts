import { Component, OnInit } from '@angular/core';
import { MessageService } from '../utils/message.services';
import { HttpService } from './service.component';

export interface PeriodicElement {
  name: string;
  medicalname: string;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [];

interface Pet {
  petid: number;
  // Other properties...
}

@Component({
  selector: 'login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'medicalname', 'date', 'action'];
  public dataSource = [];

  public username: any;
  public userDetails: any;

  ngOnInit(): void {
    this.username = localStorage.getItem('email');

    this.httpService.GetUserDetails(this.username).subscribe((res: any) => {
      this.userDetails = res[0];

      this.httpService
        .GetPetDetails(this.userDetails.id)
        .subscribe((res: any) => {
          this.dataSource = res;
        });
    });
  }

  constructor(
    private messageService: MessageService,
    private httpService: HttpService
  ) {}

  EditPet(index: number) {}

  DeletePet(index: number) {
    const pet: Pet = this.dataSource[index];
    const petId: number = pet.petid;
    console.log(petId);
    this.httpService.DeletePetDetails(petId).subscribe((res: any) => {
      this.dataSource = res;
    });
    window.location.reload();
  }
}
