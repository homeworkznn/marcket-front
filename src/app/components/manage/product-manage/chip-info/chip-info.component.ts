import { Component, OnInit } from '@angular/core';
import {Message, ConfirmationService, SelectItem} from "primeng/primeng";

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

  constructor(private confirmationService: ConfirmationService) {


  }

  ngOnInit() {

  }

  confirm1(op, event) {
    this.confirmationService.confirm({
      message: '若进行修改，请确保在修改之前已经对商品做出相应处理，以免信息混乱',
      header: '确认修改',
      icon: 'fa fa-question-circle',
      accept: () => {
        op.toggle(event);
      },
      reject: () => {
      }
    });
  }

}
