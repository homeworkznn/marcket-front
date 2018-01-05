import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/primeng";
import {Router} from '@angular/router';

@Component({
  selector: 'app-pro-info',
  templateUrl: './pro-info.component.html',
  styleUrls: ['./pro-info.component.css']
})
export class ProInfoComponent implements OnInit {

  msgs: Message[];

  uploadedFiles: any[] = [];


  constructor(private router: Router) { }

  ngOnInit() {

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  gotomenu(): void {
    this.router.navigate(['/manage/promenu']);
  }

}
