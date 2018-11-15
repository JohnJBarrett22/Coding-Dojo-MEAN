import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskToShow: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
