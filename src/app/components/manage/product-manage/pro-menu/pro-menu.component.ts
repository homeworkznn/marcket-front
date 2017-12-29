import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pro-menu',
  templateUrl: './pro-menu.component.html',
  styleUrls: ['./pro-menu.component.css']
})
export class ProMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotologin():void{
    this.router.navigate(['/manage/login']);
  }

  gotosetting():void{
    this.router.navigate(['/manage/setting']);
  }

  gotoorderresult():void{
    this.router.navigate(['/manage/order-result'])
  }

  gotopromenu():void{
    this.router.navigate(['/manage/promenu'])
  }
}



