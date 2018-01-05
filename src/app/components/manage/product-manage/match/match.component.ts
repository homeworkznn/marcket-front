import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

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
  num;
  info_list = [];
  type;
  classs = '1';
  product;
  id;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    // this.getGoodsList();
    this.getGoodsTypeList();
    this.chip_list = [
      {label: '自动（顺序选择）', value: '0'},
      {label: '1', value: '1'},
      {label: '2', value: '2'},
      {label: '3', value: '3'}
    ];

    this.chip_list1 = [
      {label: '食品', value: '1'},
      {label: '饮料', value: '2'},
      {label: '方便面', value: '3'},
      {label: '巧克力', value: '4'},
    ];

    this.chip_list4 = [
      {label: '商品', value: '1'},
      {label: '双向选择', value: '2'},
    ];
  }

  closeModal(){
    this.display = false;
  }

  getGoodsList(){
    this.http.get('/GetAllGoodsTypesServlet', {
      params: new HttpParams(),
      observe: 'response', // to display the full response
      responseType: 'json',
    }).subscribe( response => {
      },
    );
  }

  getGoodsTypeList(){
    this.http.get('/GetGoodsByGoodsTypeIdServlet', {
      params: new HttpParams().set('id', this.classs),
      observe: 'response', // to display the full response
      responseType: 'json',
    }).subscribe( response => {
      this.info_list = response.body['res'];
      this.initChipIdList();
      this.initProductList();
      this.getNumber();
      },
    );
  }

  initChipIdList(){
    this.chip_list2.splice(0, this.chip_list2.length);
    for (let i = 0; i < this.info_list.length; i++){
        this.chip_list2.push({label: this.info_list[i].id.toString(), value: i.toString()});
        // console.log(this.chip_list2)
    }
    this.id = this.chip_list2[0].value;
  }

  initProductList(){
    this.chip_list3.splice(0, this.chip_list3.length);
    for (let i = 0; i < this.info_list.length; i++){
      this.chip_list3.push({label: this.info_list[i].goodsName.toString(), value: i.toString()});
      // console.log(this.chip_list2)
    }

    this.product = this.chip_list3[0].value;
  }

  selectProduct(index){
    for(let i = 0; i < this.info_list.length; i ++){
      if(this.chip_list2[i].label == this.info_list[parseInt(index)].id.toString())
        this.id = this.chip_list2[i].value;
    }
    this.getNumber();
  }

  selectChipId(index){
    for(let i = 0; i < this.info_list.length; i ++){
      if(this.chip_list3[i].label == this.info_list[parseInt(index)].goodsName.toString())
        this.product = this.chip_list3[i].value;
    }
    this.getNumber();
  }

  getNumber(){
    for(let i = 0; i < this.info_list.length; i ++){
      if(this.chip_list2[i].label == this.info_list[i].id){
        this.num = this.info_list[i].num;
      }
    }
  }
  confirm(){
    this.display = true;
  }
}
