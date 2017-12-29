import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  pro_list = ['', '', '', ''];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotowait(): void {
    this.router.navigate(['/customer/wait']);
  }

  gotoconpay(): void {
    this.router.navigate(['/customer/con-pay']);
  }

}
