import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/client.model';


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  
  client:Client[];
  constructor() { 
    this.client=[
           { 
            serialnumber :1,
            clientName :"Mehran",
            type :"Criminal",
            phoneNum:3135388824  
          },      
           { 
            serialnumber :2,
            clientName :"Hola",
            type :"gangster",
            phoneNum:3135388825  
          },      
           { 
            serialnumber :3,
            clientName :"Hola",
            type :"gangster",
            phoneNum:3135388825  
          },      
           { 
            serialnumber :4,
            clientName :"Hola",
            type :"gangster",
            phoneNum:3135388825  
          },      
    ]
  }

  ngOnInit(): void {
  }
  onDelete(client:Client){
      console.log(client)
      const index = this.client.indexOf(client);
      this.client.splice(index, 1);
    }
    @Output() listSelected= new EventEmitter<Client>();
    onView(clients:Client){
      // console.log(clients)
      this.listSelected.emit(clients);
    }
}
