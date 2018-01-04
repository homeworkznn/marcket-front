import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-con-pay',
  templateUrl: './con-pay.component.html',
  styleUrls: ['./con-pay.component.css']
})
export class ConPayComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotopayfinish(): void {
    this.router.navigate(['/customer/pay-finish']);
  }

  gotoproinfo(): void {
    this.router.navigate(['/customer/pro-info']);
  }

}
