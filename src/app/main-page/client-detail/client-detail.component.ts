import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
 @Input() client!:Client[];
  
  constructor() { 
    console.log(this.client)
  }

  ngOnInit(): void {
  }

}
