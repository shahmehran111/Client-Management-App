import { EventEmitter } from "@angular/core";
import { Client } from "../client.model";

export class MainService{
    listSelected = new EventEmitter<Client>()
    
    private client:Client[]=[
        { 
         serialnumber :1,
         clientName :"test1",
         type :"none",
         phoneNum:3135388824  
       },      
        { 
         serialnumber :2,
         clientName :"test2",
         type :"none",
         phoneNum:3135388825  
       }]      
    
    getClient(){
        return this.client;
    }

    // toArr = new EventEmitter<Client>();
    
    addtoArr(client:Client){
        this.client.push(client)
    }

    
}
