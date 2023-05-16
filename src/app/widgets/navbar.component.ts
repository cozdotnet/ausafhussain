import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  Goto(value: string) {
    if (value == 'home') {
      this.router.navigateByUrl('/home');
    } else if (value == 'pet') {
      this.router.navigateByUrl('/pet');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
