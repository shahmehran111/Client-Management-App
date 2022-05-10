import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Output() viewClientDetail = new EventEmitter<Client>();
  constructor() { }

  ngOnInit(): void {
  }

  clientDetail(client:Client){
    // console.log(client);
    this.viewClientDetail.emit(client);
  }
}
