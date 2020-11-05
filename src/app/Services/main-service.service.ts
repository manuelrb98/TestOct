import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Model/user';
import { service_options } from '../Model/service_options.model';
import {HttpParams} from "@angular/common/http";
import { register } from '../Model/register.model';
import { search } from '../Model/search.model';
import { company } from '../Model/company.model';
import { company_collaborator } from '../Model/company_collaborator.model';
import { service } from '../Model/service.model';
import { history } from '../Model/history.model';

    

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/AlaOrden/backend';

  getUser(userobj:user){
    //Login user
    return this.http.post<user>(this.Url,userobj, {observe: 'response'});
  }

  setUser(registerobj: register){
    //Register user
    return this.http.post<user>(this.Url,registerobj); 
  }

  getserviceoptions(searchobj: search){
    //Obtener opciones de servicios a partir de la búsqueda principal
    return this.http.put<service_options[]>(this.Url, searchobj);
  }
  getcompanies(){
    //Obtener el listado de compañías para que el prestador de servicios se identifíque con una
    return this.http.get<company[]>(this.Url); 
  }

  joincompany(collaborator: company_collaborator){
    //Unir a prestador de servicios a compañía
    return this.http.post<company_collaborator>(this.Url, collaborator); 
  }

  createcompany(newcompany: company){
    //Crear compañía
    return this.http.post<company>(this.Url, newcompany); 
  }

  addservices(newservices: service[]){
    //Agregar servicios a la compañía
    return this.http.post<service>(this.Url, newservices); 
  }

  getmyUser(email){
    //Obtener información del usuario en sesión actualmente
    return this.http.get<register>(this.Url,email);
  }
  gethistory(email: any){
    //Obtener el historial de servicios del usuario en sesión
    return this.http.get<history[]>(this.Url, email); 
  }


}

