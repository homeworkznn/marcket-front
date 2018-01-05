import { Component, OnInit } from '@angular/core';
import {Message, ConfirmationService, SelectItem} from "primeng/primeng";
import {Router} from '@angular/router';

@Component({
  selector: 'app-chip-info',
  templateUrl: './chip-info.component.html',
  styleUrls: ['./chip-info.component.css'],
  providers: [ConfirmationService]
})
export class ChipInfoComponent implements OnInit {

  msgs: Message[];
  statu: '';
  uploadedFiles: any[] = [];
  status = [
    {label: '已修改', value: '1'},
    {label: '未修改', value: '0'}
  ];

  constructor(private confirmationService: ConfirmationService, private router: Router) {


  }

  ngOnInit() {

  }

  gotomenu(): void {
    this.router.navigate(['/manage/promenu']);
  }



}
