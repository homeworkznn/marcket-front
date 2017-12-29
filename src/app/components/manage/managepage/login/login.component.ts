import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // this.http
  //     .post{ url: '/manage/login', body: '', options: {
  //       observe: 'response', // to display the full response
  //       responseType: 'json',
  //       params: new HttpParams().set('name', this.name).set('username', this.username).set('password', this.password)
  // }}

  gotomenu():void{
    this.router.navigate(['/manage/menu']);
  }

}
