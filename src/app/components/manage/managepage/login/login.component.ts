import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tel: string;
  password: string;
  constructor(private router: Router,  private http: HttpClient ) { }

  ngOnInit() {
    this.login();
  }

  // this.http
  //     .post{ url: '/manage/login', body: '', options: {
  //       observe: 'response', // to display the full response
  //       responseType: 'json',
  //       params: new HttpParams().set('name', this.name).set('username', this.username).set('password', this.password)
  // }}

  login(){
    this.http.get('/LoginServlet', {
      params: new HttpParams().set('id','12345679').set('tel',this.tel).set('password',this.password),
      observe: 'response', // to display the full response
      responseType: 'json',
    }).subscribe( response => {
        if(response.body['msg'] == 'yes') {
          alert('登录成功！');
          this.router.navigate(['/manage/menu']);
        }
      },
    );
  }

}
