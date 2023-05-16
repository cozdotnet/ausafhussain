import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/home/service.component';
import { PetHttpService } from './services.component';

@Component({
  selector: 'app-session',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css'],
})
export class AddSessionDialog {
  @Output() addSession = new EventEmitter<string>();

  public email: any;
  public userid: any;
  public name = '';
  public medicalname = '';
  public sessionDate = new Date();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private homeHttpService: HttpService,
    private httpService: PetHttpService,
    private _snackBar: MatSnackBar
  ) {
    this.email = localStorage.getItem('email');
    this.homeHttpService.GetUserDetails(this.email).subscribe((res: any) => {
      this.userid = res[0].id;
    });
  }
  onCancel(): void {}

  CreateSession() {
    this.httpService.CreatePetSession(
      this.userid,
      this.name,
      this.medicalname,
      this.sessionDate
    );
    this._snackBar.open('Session Added', 'Close', {
      duration: 3000,
    });
  }
}
