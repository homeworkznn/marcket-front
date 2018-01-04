import {Component, NgModule, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {

  images: any[];

  constructor( private router: Router) {

  }

  ngOnInit() {
    this.images = [];
    this.images.push({source: '../../../../assets/img/gallerial1.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial2.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial3.jpg'});
  }

  gotoproinfo(): void {
    this.router.navigate(['/customer/pro-info']);
  }
}
