import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  
  // clientSelected!:Client;
  name!:string;
  type!:string;
  sno!:number;
  phone!:number;

  constructor(private mainService: MainService) { 
  }

  ngOnInit(): void {
    this.mainService.listSelected.subscribe(
      (client:Client)=>{
        this.name=client.clientName;
        this.type=client.type;
        this.sno=client.serialnumber;
        this.phone=client.phoneNum;
        
        console.log(client)
      }
    )
  }

}
