import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from '../utils/message.services';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSessionDialog } from './components/addsession.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetHttpService } from './components/services.component';
import { HttpService } from '../home/service.component';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date'];
  public petSessionsName: any;
  public petSessionsDate: any;

  public email: any;
  public userid: any;

  goals: any[] = [];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private httpService: PetHttpService,
    private homeHttpService: HttpService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.homeHttpService.GetUserDetails(this.email).subscribe((res: any) => {
      this.userid = res[0].id;
      this.httpService.GetUpcomingSession(this.userid).subscribe((res: any) => {
        this.petSessionsName = res.name;
        this.petSessionsDate = res.nearest_date;
        console.log(this.petSessionsName);
      });
    });
  }

  addSession(): void {
    let dialogRef = this.dialog.open(AddSessionDialog, {});
  }

  addGoal(): void {
    // Add a new goal to the goals array
  }

  completeSession(session: any): void {
    // Mark a pet session as completed and generate a reminder for the end of the month
  }
}
