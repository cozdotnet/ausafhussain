import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './utils/message.services';
import { PetComponent } from './pet/pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './widgets/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSessionDialog } from './pet/components/addsession.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'pet',
    component: PetComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PetComponent,
    NavbarComponent,
    HomeComponent,
    AddSessionDialog,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
