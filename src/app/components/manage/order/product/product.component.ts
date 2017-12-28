import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  data: any;
  msgs: Message[];
  options: any;
  data2: any;
  msgs2: Message[];
  options2: any;
  data3: any;
  msgs3: Message[];
  options3: any;


  constructor() {
    this.data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12月'],
      datasets: [
        {
          label: '单价/元',
          data: [2.50, 2.50, 2.50, 2.00, 2.00, 2.50, 2.50, 2.50, 2.50, 2.50, 2.50, 2.00],
          fill: false,
          borderColor: 'rgba(203,93,8,0.95)'
        }
      ]
    };

    this.options = {
      title: {
        display: true,
        text: '月平均单价变化折线图',
        fontSize: 16,
        position: 'bottom',
      },
    };

    this.data2 = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12月'],
      datasets: [
        {
          label: '数量/件',
          data: [1500, 1651, 1665, 1751, 1855, 1567, 2001, 2039, 1998, 1867, 1675, 1609],
          fill: false,
          borderColor: 'rgba(203,93,8,0.95)'
        }
      ]
    };

    this.options2 = {
      title: {
        display: true,
        text: '月销量变化折线图',
        fontSize: 16,
        position: 'bottom',
      },
    };

    this.data3 = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12月'],
      datasets: [
        {
          label: '销售额/元',
          data: [3750.00, 4127.50, 4162.50, 3502.00, 3710.00, 3917.50, 5002.50, 5097.50, 4995.00, 4667.50, 4187.50, 3218.00],
          fill: false,
          borderColor: 'rgba(203,93,8,0.95)'
        }
      ]
    };

    this.options3 = {
      title: {
        display: true,
        text: '月销售额折线图',
        fontSize: 16,
        position: 'bottom',
      },
    };
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push
    ({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }

  selectData2(event) {
    this.msgs2 = [];
    this.msgs2.push
    ({severity: 'info', summary: 'Data Selected', 'detail': this.data2.datasets[event.element._datasetIndex].data2[event.element._index]});
  }

  selectData3(event) {
    this.msgs3 = [];
    this.msgs3.push
    ({severity: 'info', summary: 'Data Selected', 'detail': this.data3.datasets[event.element._datasetIndex].data3[event.element._index]});
  }

}
