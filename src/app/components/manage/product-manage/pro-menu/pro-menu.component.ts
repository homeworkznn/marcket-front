import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pro-menu',
  templateUrl: './pro-menu.component.html',
  styleUrls: ['./pro-menu.component.css']
})
export class ProMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  gotoproinfo(): void {
    this.router.navigate(['/manage/proinfo']);
  }

  gotochipinfo(): void {
    this.router.navigate(['/manage/chipinfo']);
  }

  gotomatch(): void {
    this.router.navigate(['/manage/match']);
  }
}



