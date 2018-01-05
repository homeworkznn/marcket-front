import {Component, NgModule, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {

  images: any[];

  constructor( private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.images = [];
    this.images.push({source: '../../../../assets/img/gallerial1.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial2.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial3.jpg'});
    this.getList();
  }

  gotoproinfo(): void {
    this.router.navigate(['/customer/pro-info']);
  }

  getList(){
    this.http.get('/GetAllChipsServlet', {
      params: new HttpParams(),
      observe: 'response', // to display the full response
      responseType: 'json',
    }).subscribe( response => {

      },
    );
  }
}
