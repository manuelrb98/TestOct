import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { history } from '../../Model/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  opened = false;
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";

  histories: HttpEvent<history[]>;
  history_card: history;
  constructor(private eventEmitterService: EventEmitterService , private http:MainServiceService, private router: Router) { }

  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { 
     
  
    this.http.gethistory(localStorage.getItem('email')) // Enviar los parámetros de búsqueda al servicio
    .subscribe(data =>{
      this.histories = data;
    });
      
      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }

  selectedservice(){//Cuando se selecciona un item del historial

    //Guardar los datos del item para mostrarlos en el detalle del servicio
    localStorage.setItem('hid','selectedid');
    localStorage.setItem('hservice','selectedservice');
    localStorage.setItem('hworker','selectedworker');
    localStorage.setItem('hscore','selectedscore');
    localStorage.setItem('hcomments','selectedcomments');
    
    

    //Ir al detalle del registro del historial
    this.router.navigate(['/servicehistorycard']);
  }

} 
