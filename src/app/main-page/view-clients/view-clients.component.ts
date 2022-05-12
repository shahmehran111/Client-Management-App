import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client.model';
import { MainService } from '../main.service';


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  
  client!:Client[];
  constructor(private mainServie: MainService) { 
  }

  ngOnInit(): void {
    this.client=this.mainServie.getClient();
  }
  
  onDelete(client:Client){
      console.log(client)
      const index = this.client.indexOf(client);
      this.client.splice(index, 1);
    }
    onView(client:Client){
      this.mainServie.listSelected.emit(client);
    }
}