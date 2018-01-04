import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router ) {}

  ngOnInit() {
  }

  gotomenu(): void {
    this.router.navigate(['/manage/menu']);
  }

  gotoresult(): void {
    this.router.navigate(['/manage/order-result']);
  }

  gotoorder(): void {
    this.router.navigate(['/manage/order']);
  }
}
