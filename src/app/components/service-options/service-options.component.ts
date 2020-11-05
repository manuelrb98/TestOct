import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { search } from 'src/app/Model/search.model';
import { service_options } from 'src/app/Model/service_options.model';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.css']
})
export class ServiceOptionsComponent implements OnInit {
  opened = false;
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";

  services:service_options[];
  constructor(private eventEmitterService: EventEmitterService, private http:MainServiceService , private toastr: ToastrService) { }

  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    selectservice(){ //Cuando se selecciona una de las opciones de servicio

      //Limpiar la memoria de la búsqueda realizada
      localStorage.removeItem('searchservice');
      localStorage.removeItem('searchtime');
      localStorage.removeItem('searchlocation');
      localStorage.removeItem('searchdesc');

      //Agendar servicio

      this.toastr.success('Su servicio ha sido agendado!', 'Felicidades', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing',
        timeOut: 5000
      });

    }
  ngOnInit() {
    let searchobj = new search(); //Armar el objeto de búsqueda para mandarlo al backend
    searchobj.service = localStorage.getItem('searchservice');
    searchobj.time = localStorage.getItem('searchtime');
    searchobj.location = localStorage.getItem('searchlocation');
    searchobj.desc = localStorage.getItem('searchdesc');

  this.http.getserviceoptions(searchobj) // Enviar los parámetros de búsqueda al servicio
  .subscribe(data =>{
    this.services = data;
  });
  
  if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  } 

}
