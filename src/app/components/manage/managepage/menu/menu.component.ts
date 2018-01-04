import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotologin(): void {
    this.router.navigate(['/manage/login']);
}

  gotosetting(): void {
    this.router.navigate(['/manage/setting']);
  }

  gotoorder(): void {
    this.router.navigate(['/manage/order']);
  }

  gotopromenu(): void {
    this.router.navigate(['/manage/promenu']);
  }



}
