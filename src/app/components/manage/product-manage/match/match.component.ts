import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  chip_list: any = [];
  chip_list1: any = [];
  chip_list2: any = [];
  chip_list3: any = [];
  chip_list4: any = [];
  display = false;
  current_chips;
  type;
  classs;
  product;
  id;
  constructor() { }

  ngOnInit() {
    this.chip_list = [
      {label: '自动（顺序选择）', value: '0'},
      {label: '1', value: '1'},
      {label: '2', value: '2'},
      {label: '3', value: '3'}
    ];

    this.chip_list2 = [
      {label: '1', value: '1'},
      {label: '2', value: '2'},
      {label: '3', value: '3'}
    ];

    this.chip_list1 = [
      {label: 'A', value: '1'},
      {label: 'B', value: '2'},
      {label: 'C', value: '3'}
    ];

    this.chip_list3 = [
      {label: '乐视薯片', value: '1'},
      {label: '原味薯条', value: '2'},
    ];

    this.chip_list4 = [
      {label: '商品', value: '1'},
      {label: '双向选择', value: '2'},
    ];
  }

  closeModal(){
    this.display = false;
  }
}
