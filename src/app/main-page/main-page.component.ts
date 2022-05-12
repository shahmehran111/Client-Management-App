import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainService]
})
export class MainPageComponent implements OnInit {
  // clientSelected!:Client;

  @Output() viewClientDetail = new EventEmitter<Client>();
  constructor() { }

  ngOnInit(): void {
  }

  // clientDetail(client:Client){
  //   this.clientSelected=client;
  // }

  onAddclient(client:Client){
      // this.addNewClient =client;
  }
}
