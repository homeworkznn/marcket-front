import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-order-inquiry',
  templateUrl: './order-inquiry.component.html',
  styleUrls: ['./order-inquiry.component.css']
})
export class OrderInquiryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotomenu(): void {
    this.router.navigate(['/manage/menu']);
  }
  gotoorder(): void {
    this.router.navigate(['/manage/order']);
  }

  gotoresult(): void {
    this.router.navigate(['/manage/order-result']);
  }

}
