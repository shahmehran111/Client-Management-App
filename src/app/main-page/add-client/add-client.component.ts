
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Client } from 'src/app/client.model';
import { MainPageComponent } from '../main-page.component';
import { MainService } from '../main.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  name!:string;
  type!:string;
  phone!:number;
  SerialNumber!:number;

  @Output() addClient= new EventEmitter<Client>();
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const client={
     clientName:this.name,
     type:this.type,
      phoneNum:this.phone,
      serialnumber:1
    }
    // this.mainService.toArr.emit(client)
    this.mainService.addtoArr(client)
  }
}
