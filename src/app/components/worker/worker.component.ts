import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  opened = false;

  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";
  constructor(private eventEmitterService: EventEmitterService) { }
  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }
 
   
  }