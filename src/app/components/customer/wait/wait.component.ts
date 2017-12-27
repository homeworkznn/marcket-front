import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source: '../../../../assets/img/gallerial1.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial2.jpg'});
    this.images.push({source: '../../../../assets/img/gallerial3.jpg'});
  }
}
