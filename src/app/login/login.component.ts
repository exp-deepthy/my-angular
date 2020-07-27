import { Component, OnInit } from '@angular/core';
import { UserDetails } from './login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new UserDetails('admin', 'adminpwd');

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.route.navigate(['success-user']);
  }

}
