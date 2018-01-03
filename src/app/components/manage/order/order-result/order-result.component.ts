import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotomenu(): void {
    this.router.navigate(['/manage/menu']);
  }
  gotoorder(): void {
    this.router.navigate(['/manage/order']);
  }
}

