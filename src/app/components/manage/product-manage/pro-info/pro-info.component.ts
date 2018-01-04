import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-pro-info',
  templateUrl: './pro-info.component.html',
  styleUrls: ['./pro-info.component.css']
})
export class ProInfoComponent implements OnInit {

  msgs: Message[];

  uploadedFiles: any[] = [];


  constructor() { }

  ngOnInit() {

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
