import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  gotomenu():void{
    this.router.navigate(['/manage/menu']);
  }

}
