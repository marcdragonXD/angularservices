import { Injectable } from "@angular/core"; 
import { Persona } from "../components/models/persona";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonas {
    // debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) {}

    // TENEMOS DOS OPCIONES PARA TRABAJAR.
    // DEVOLVER LA PETICION O DEVOLVER UNA PROMESA
    // DEVOLVEMOS LA PETICION A LA LLAMADA UTILIZando Observable
    getPersonas(): Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);
    }
}